<template>
	<tr v-on:click="$emit('click')">
		<td v-bind:style="computeColor(color)"></td>
		<td> {{color.r}} </td>
		<td> {{color.g}} </td>
		<td> {{color.b}} </td>
		<td> <input type="number" v-model.number="color.h" v-on:input="updateColor"/> </td>
	</tr> 

</template>

<script lang="coffee">

	export default
		props:
			["color"]

		methods:
			computeColor: (color) ->
				{
					"background-color": "rgb(#{color.r},#{color.g},#{color.b})"
				}

			updateColor: (event) ->
				this.$emit('update-color', this.color)
</script>
