<template>
	<svg v-if="sprite && sprite.rgb_array.length" class="sprite-svg" v-bind:view-box.camel="viewBoxSize">
		<g v-for="(line, line_index) in sprite.rgb_array">
			<g v-for="(pixel, pixel_index) in line">
				<rect
					v-bind:x="pixel_index * 10"
					v-bind:y="line_index * 10"
					width="10" height="10"
					v-bind:style="{fill: computeColor(pixel)}" />
			</g>
		</g>
	</svg>
</template>

<script lang="coffee">

	export default

		props: ['sprite']

		computed:
			viewBoxSize: () ->
				spriteHeight = this.sprite.rgb_array.length * 10
				spriteWidth = this.sprite.rgb_array[0].length * 10
				viewBoxSize = Math.max(spriteHeight, spriteWidth)

				leftOffset = (spriteWidth - viewBoxSize) / 2
				topOffset = (spriteHeight - viewBoxSize) / 2
				return "#{leftOffset} #{topOffset} #{viewBoxSize} #{viewBoxSize}"

		methods:
			computeColor: (pixel)->
				if pixel[3] != 0
					"rgb(#{pixel[0]},#{pixel[1]},#{pixel[2]})"
				else
					"rgba(0, 0, 0, 0)"

</script>

<style>
.sprite-svg {
	height: 100%;
	width: 100%;
	}
</style>
