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
	
	methods:
		colorRef: (color) ->
			"#{color.r},#{color.g},#{color.b}"

		selectColor: (color) ->
			this.$emit('select-color', color)
			this.selectedColor = this.colorRef(color)

		updateColor: (color) ->
			this.$emit('update-color', color)

</script>

<style>
.color-map-table {
	height: 90%;
	overflow: auto;
}
</style>
