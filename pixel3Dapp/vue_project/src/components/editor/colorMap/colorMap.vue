<template>
	<div class="w3-container w3-center">
		<div class="color-map-table">
	<table class="w3-table w3-centered w3-hoverable w3-border w3-bordered">
		<thead>
		<tr>
			<th>Color</th>
			<th>R</th>
			<th>G</th>
			<th>B</th>
			<th>Height</th>
		</tr>
		</thead>
		<tbody>
		<color-item
			v-for="color in colorMap.colorMapItems"
			v-bind:ref="colorRef(color)"
			v-bind:class="[selectedColor == colorRef(color) ? 'w3-theme' : '']"
			v-bind:color="color"
			v-on:update-color="updateColor($event)"
			v-on:click="selectColor(color)"/>
		</tbody>
	</table>
		</div>
		<button
			class="w3-button w3-theme w3-margin-top w3-margin-bottom"
			v-bind:disabled="!currentlyUpdating"
			v-on:click="saveUpdates">
			<i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
			Save Changes
		</button>
	</div>
</template>

<script lang="coffee">
import ColorItem from "./colorItem"

export default

	components:
		"color-item": ColorItem

	props:
		["colorMap"]
	
	data: () ->
		selectedColor: null
		updates:
			colorMapItems: []
	
	computed:
		currentlyUpdating: () ->
			console.log "hey"
			Object.keys(this.updates.colorMapItems).length or this.updates.maxHeight or this.updates.pixelSize


	methods:
		colorRef: (color) ->
			"#{color.r},#{color.g},#{color.b}"

		selectColor: (color) ->
			this.$emit('select-color', color)
			this.selectedColor = this.colorRef(color)

		updateColor: (color) ->
			this.$emit('update-color', color)
			colorToUpdate = colorItem for colorItem in this.updates.colorMapItems when colorItem.id is color.id

			if colorToUpdate
				colorToUpdate.h = color.h
			else
				this.updates.colorMapItems.push(color)

		saveUpdates: () ->
			console.log(this.updatedColorItems)

			url = "#{process.env.VUE_APP_SERVER_ROOT}/api/color_maps/#{this.colorMap.id}/"

			options =
				method: "PATCH"
				body:
					JSON.stringify(this.updates)
				headers:
					"Content-Type": "application/json"

			console.log options.body

			self = this
			fetch(url, options)
			.catch((error) ->
				console.log error
			)
			.then((response) ->
				console.log response
				self.updates.colorMapItems = []
				self.$delete(self.updates, "maxHeight")
				self.$delete(self.updates, "pixelSize")
			)
</script>

<style>
.color-map-table {
	height: 90%;
	overflow: auto;
}
</style>
