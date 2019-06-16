<template>
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
			v-for="color in colorMap"
			v-bind:ref="colorRef(color)"
			v-bind:class="[selectedColor == colorRef(color) ? 'w3-theme' : '']"
			v-bind:color="color"
			v-on:click="selectColor(color)"/>
		</tbody>
	</table>
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
	
</script>
