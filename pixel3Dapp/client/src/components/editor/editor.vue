<template>
	<div>
		<toolbar
			v-bind:updates="updates"
			v-bind:sprite="sprite"
			v-on:reprocess="refresh3Ddisplay"
			id="editor-toolbar">
		</toolbar>
		<div id="editor-body" class="w3-cell-row">
			<div id="sprite-view" class="w3-cell">
				<sprite-3d ref="sprite3d" v-bind:sprite="sprite"></sprite-3d>
			</div>
			<div class="w3-cell w3-cell-top w3-bar-block w3-center" style="width:20%">
				<h3 id="size-title" class="w3-bar-item w3-center w3-border-top w3-border-theme">Size</h3>
				<form class="w3-container">
					<label class="w3-text-theme"><b>Pixel Size</b></label>
					<input class="w3-input w3-border" v-model="sprite.colorMap.pixelSize" v-on:input="handlePixelSizeInput($event.target.value)" type="number">
					<label class="w3-text-theme"><b>Max Height</b></label>
					<input class="w3-input w3-border" v-bind:value="sprite.colorMap.maxHeight" v-on:input="handleMaxHeightInput($event.target.value)" type="number">
				</form>
				<table class="w3-table">
					<tr>
						<th>Height</th>
						<th>Width</th>
						<th>Height</th>
					</tr>
					<tr>
						<td> {{ sprite.pixelMap.height * sprite.colorMap.pixelSize }}</td>
						<td> {{ sprite.pixelMap.width * sprite.colorMap.pixelSize }}</td>
						<td> {{ maxHeight }}</td>
					</tr>
				</table>

				<h3 class="w3-bar-item w3-center w3-border-top w3-border-theme">ColorMap</h3>
				<color-map
						class="color-map"
						v-bind:color-map="sprite.colorMap"
						v-on:select-color="selectMeshes($event)"
						v-on:update-color="handleUpdateColor($event)"
						/>
			</div>
		</div>
	</div>
</template>

<script lang="coffee">
import Toolbar from "./toolbar"
import Sprite3D from "../gallery/sprite3d"
import Methods from "./methods"
import Profiles from "./profiles"
import ColorMap from "./colorMap/colorMap"

export default
	components:
		"toolbar": Toolbar
		"sprite-3d":Sprite3D
		"methods": Methods
		"profiles": Profiles
		"color-map": ColorMap

	props:
		["sprite"]
	
	data: () ->
		updates:
			colorMapItems: []
	
	
	computed:
		maxHeight: () ->
			maxHeight = 0
			for item in this.sprite.colorMap.colorMapItems
				do (item) ->
					if item.h > maxHeight
						maxHeight = item.h
			return maxHeight
	

	methods:
		findMeshes: (color) ->
			selectedMeshes = []
			meshes = this.$refs.sprite3d.getMeshes()

			self = this
			for line, row of self.sprite.pixelMap.rows
				do (line, row) ->
					for column, pixel of row
						do (column, pixel) ->
							if pixel.r == color.r and pixel.g == color.g and pixel.b == color.b
								selectedMeshes.push(meshes[line][column])
			return selectedMeshes

		selectMeshes: (color) ->
			this.$refs.sprite3d.highlightMeshes(this.findMeshes(color))

		updateMeshes: (color) ->
			this.$refs.sprite3d.updateMeshes(this.findMeshes(color), color.h)

		handleUpdateColor: (color) ->
			this.updateMeshes(color)
			colorToUpdate = colorItem for colorItem in this.updates.colorMapItems when colorItem.id is color.id

			if colorToUpdate
				colorToUpdate.h = color.h
			else
				this.updates.colorMapItems.push(color)

		handlePixelSizeInput: (size) ->
			this.$set(this.updates, "pixelSize", size)
			this.refresh3Ddisplay()

		handleMaxHeightInput: (height) ->
			this.$set(this.updates, "maxHeight", height)


		refresh3Ddisplay: () ->
			this.$refs.sprite3d.clear()
			this.$refs.sprite3d.build()

</script>

<style>
#sprite-view {
	width: 80%;
	height: 100%;
}

#editor-toolbar{
	height: 5%
}

#editor-body {
	height:90%
}

#size-title {
	margin-top: 0px;
}

.color-map {
	height: 50%;
}

</style>
