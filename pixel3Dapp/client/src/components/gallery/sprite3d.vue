<template>
	<canvas class="sprite-canvas" v-bind:ref="canvasName">
	</canvas>
</template>

<script lang="coffee">
	import { Engine, Scene, ArcRotateCamera, Mesh, Animation, Vector2, Vector3, Quaternion, TransformNode, HemisphericLight, PolygonMeshBuilder, MeshBuilder, SceneLoader, StandardMaterial, Color3, HighlightLayer } from 'babylonjs'
	import 'babylonjs-loaders'

	createScene = (engine, canvas) ->
		# Create a basic BJS Scene object.
		scene = new Scene(engine);

		# Create a basic light, aiming 0,1,0 - meaning, to the sky.

		# # Create a built-in "sphere" shape.
		# sphere = MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);
		#
		# # Move the sphere upward 1/2 of its height.
		# sphere.position.y = 1;
		#
		# Create a built-in "ground" shape.
		# ground = MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);

		# Return the created scene.
		return scene;

	export default

		props:
			sprite:
				type: Object
				required: true
			animate:
				type: Boolean
				default: false

		data: () ->
			centerNode: null
			engine: null
			scene: null
			camera: null
			meshes: {}
			highlightLayer: null
			highlightedMeshes: []

		watch:
			sprite: (newSprite, oldSprite) ->
				# Wait for next tick, so that the canvas is initialized
				this.$nextTick(() ->
					# Rebuild everything
					this.clear()
					this.initBuild()
					this.build()

					self = this
					this.engine.runRenderLoop(() ->
						self.scene.render()
						)
					)


		computed:
			canvasName: () ->
				"canvas_#{this.sprite.id}"

		methods:
			###
			computeSpriteSize: () ->
				height = 0
				width = 0
				depth = 0
				update = (heightItem) ->
					if heightItem.x > width
						width = heightItem.x
					if heightItem.y > height
						height = heightItem.y
					if heightItem.h > depth
						depth = heightItem.h

				update(heightItem) for heightItem in JSON.parse(this.sprite.heightMap)
				this.height = height
				this.width = width
				this.depth = depth
			###

			lookForPixelHeightInColorMap: (pixel) ->
				# This is amazingly inefficient.
				height = 0
				for colorMapItem in this.sprite.colorMap.colorMapItems
					do (colorMapItem) ->
						if colorMapItem.r == pixel.r and colorMapItem.g == pixel.g and colorMapItem.b == pixel.b
							height = colorMapItem.h
							return
				return height

			buildPixel: (line, column, pixel, scene) ->
				corners = [
						new Vector2(0, 0),
						new Vector2(1, 0),
						new Vector2(1, 1),
						new Vector2(0, 1)
						]

				height = this.lookForPixelHeightInColorMap(pixel)

				options =
					width: this.sprite.colorMap.pixelSize
					height: this.sprite.colorMap.pixelSize
					depth: 1
					updatable: true

				pixel = MeshBuilder.CreateBox("pixel_#{line}_#{column}", options, scene)
				pixel.scaling.z = height
				pixel.position.y = (this.sprite.pixelMap.height - line) * this.sprite.colorMap.pixelSize
				pixel.position.x = column * this.sprite.colorMap.pixelSize
				pixel.position.z = - height / 2
				pixel.setParent(this.centerNode)

				return pixel


			buildCamera: () ->
				radius = Math.max(this.sprite.pixelMap.width * this.sprite.colorMap.pixelSize, this.sprite.pixelMap.height * this.sprite.colorMap.pixelSize + 10)
				camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, radius, this.centerNode.position, this.scene)
				
				return camera
			
			refreshCamera: () ->
				this.camera.setTarget(this.centerNode.position)

				radius = Math.max(this.sprite.pixelMap.width * this.sprite.colorMap.pixelSize, this.sprite.pixelMap.height * this.sprite.colorMap.pixelSize + 10)
				this.camera.radius = radius

				allMeshes = []
				for meshLine in Object.values(this.meshes)
					do (meshLine) ->
						allMeshes.push(mesh) for mesh in Object.values(meshLine)

				this.camera.zoomOn(allMeshes)



			buildLight: () ->
				new HemisphericLight('light1', new Vector3(1, 0, 0), this.scene)

			animateSprite: () ->
				rotateAnimation = new BABYLON.Animation("myAnimation", "rotation.y", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE)

				keys = []

				keys.push(
					frame: 0,
					value: 0
				)
				
				keys.push(
					frame: 150,
					value: 2 * Math.PI
				)

				rotateAnimation.setKeys(keys)
				this.centerNode.animations = []
				this.centerNode.animations.push(rotateAnimation)

				this.scene.beginAnimation(this.centerNode, 0, 150, true)

			getMeshes: () ->
				this.meshes

			highlightMeshes: (meshesToHighlight) ->
				this.highlightLayer.removeMesh(mesh) for mesh in this.highlightedMeshes	
				self = this
				for mesh in meshesToHighlight
					do (mesh) ->
						self.highlightedMeshes.push(mesh)
						self.highlightLayer.addMesh(mesh, Color3.Blue())

			updateMeshes: (meshesToUpdate, newHeight) ->
				for mesh in meshesToUpdate
					do (mesh) ->
						mesh.scaling.z = newHeight
						mesh.position.z = -newHeight / 2


			build: () ->
				this.clear()

				self = this

				console.log "Removing current meshes..."
				for meshLine in Object.values(this.meshes)
					do (meshLine) ->
						self.scene.removeMesh(mesh) for mesh in Object.values(meshLine)

				console.log "Computing center node..."
#				this.centerNode = new TransformNode("center", this.scene)
#				this.centerNode.setAbsolutePosition(new Vector3(this.sprite.pixelMap.height * this.sprite.colorMap.pixelSize / 2, this.sprite.pixelMap.width * this.sprite.colorMap.pixelSize / 2, 0))

				buildAndColorPixel = (line, column, pixel) ->
						mesh = self.buildPixel(line, column, pixel, self.scene)
						pixelTexture = new StandardMaterial("pixel_#{line}_#{column}_texture", self.scene)
						# color = self.sprite.rgb_array[heightItem.x][heightItem.y]
						pixelTexture.diffuseColor = new Color3(pixel.r / 255, pixel.g / 255, pixel.b / 255)
						mesh.material = pixelTexture
						if !self.meshes[line]
							self.meshes[line] = {}
						self.meshes[line][column] = mesh

	#			buildAndColorPixel(heightItem) for heightItem in JSON.parse(this.sprite.heightMap)


				console.log("Building pixels...")
				for line, row of this.sprite.pixelMap.rows
					do (line, row) ->
						for column, pixel of row
							do (column, pixel) ->
								buildAndColorPixel(line, column, pixel)
				this.refreshCamera()

				if this.animate
					this.animateSprite()


			initBuild: () ->
				canvas = this.$refs[this.canvasName]

				this.engine = new Engine(canvas, true, {stencil: true})
				this.scene = createScene(this.engine, canvas)

				this.centerNode = new TransformNode("center", this.scene)
				this.centerNode.setAbsolutePosition(new Vector3(this.sprite.pixelMap.width * this.sprite.colorMap.pixelSize / 2, this.sprite.pixelMap.height * this.sprite.colorMap.pixelSize / 2, 0))

				this.centerNode.rotation.z = -Math.PI / 2

				this.camera = this.buildCamera()

				# Attach the camera to the canvas.
				this.camera.attachControl(canvas, false)

				this.buildLight()

				# scene.beginAnimation(this.centerNode, 0, 150, true)

				this.highlightLayer = new HighlightLayer("hl", this.scene)
				this.highlightLayer.blurHorizontalSize = 0.1
				this.highlightLayer.blurVerticalSize = 0.5

				self = this
				###
				this.engine.runRenderLoop(() ->
						self.scene.render()
				)
				###
				window.addEventListener('resize', () ->
					self.engine.resize()
				)


			clear: () ->
				this.engine.stopRenderLoop()

		mounted: () ->
			this.initBuild()
			this.build()

		destroyed: () ->
			this.clear()

		deactivated: () ->
			this.clear()

		activated: () ->
			self = this
			this.engine.runRenderLoop(() ->
					self.scene.render()
			)

</script>

<style>
.sprite-canvas {
	height: 100%;
	width: 100%;
	}
</style>
