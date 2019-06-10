<template>
	<canvas class="sprite-canvas" v-bind:ref="canvasName">
	</canvas>
</template>

<script lang="coffee">
	import { Engine, Scene, ArcRotateCamera, Animation, Vector2, Vector3, Quaternion, TransformNode, HemisphericLight, PolygonMeshBuilder, MeshBuilder, SceneLoader, StandardMaterial, Color3 } from 'babylonjs';
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
			['sprite']

		data: () ->
			height: 0
			width: 0
			depth: 0
			centerNode: null
			engine: null

		computed:
			canvasName: () ->
				"canvas_#{this.sprite.id}"

		methods:
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

			buildPixel: (heightItem, scene) ->
				corners = [
						new Vector2(0, 0),
						new Vector2(1, 0),
						new Vector2(1, 1),
						new Vector2(0, 1)
						]

				options =
					width: 1
					height: 1
					depth: heightItem.h

				pixel = MeshBuilder.CreateBox("pixel_#{heightItem.x}_#{heightItem.y}", options, scene)
				pixel.position.x = heightItem.x
				pixel.position.y = heightItem.y
				pixel.position.z = -heightItem.h / 2
				pixel.setParent(this.centerNode)

				return pixel


			buildCamera: (scene) ->
				radius = Math.max(this.width, this.height) + this.depth / 2 + 10
				camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, radius, this.centerNode.position, scene)
				return camera

			buildLight: (scene) ->
				new HemisphericLight('light1', new Vector3(1, 0, 0), scene)

			animate: () ->
				rotateAnimation = new BABYLON.Animation("myAnimation", "rotation.x", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE)

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


		mounted: () ->
			console.log(this.canvasName)
			console.log(this.$refs)
			canvas = this.$refs[this.canvasName]
		
			this.engine = new Engine(canvas, true)
			scene = createScene(this.engine, canvas);
	
			this.computeSpriteSize()

			this.centerNode = new TransformNode("center", scene)
			this.centerNode.setAbsolutePosition(new Vector3(this.width / 2, this.height / 2, this.depth / 2))

			self = this

			buildAndColorPixel = (heightItem) ->
					mesh = self.buildPixel(heightItem, scene)
					pixelTexture = new StandardMaterial("pixel_#{heightItem.x}_#{heightItem.y}", scene)
					color = self.sprite.rgb_array[heightItem.x][heightItem.y]
					pixelTexture.diffuseColor = new Color3(color[0] / 255, color[1] / 255, color[2] / 255)
					mesh.material = pixelTexture
			
			buildAndColorPixel(heightItem) for heightItem in JSON.parse(this.sprite.heightMap)

			camera = this.buildCamera(scene)

			this.centerNode.rotation.z = -Math.PI / 2

			# Attach the camera to the canvas.
			camera.attachControl(canvas, false)

			this.buildLight(scene)

			this.animate()

			# scene.beginAnimation(this.centerNode, 0, 150, true)

			this.engine.runRenderLoop(() ->
					scene.render()
			)

			window.addEventListener('resize', () ->
				self.engine.resize()
			)

		destroyed: () ->
			this.engine.stopRenderLoop()

</script>

<style>
.sprite-canvas {
	height: 100%;
	width: 100%;
	}
</style>
