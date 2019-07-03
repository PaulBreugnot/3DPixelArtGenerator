<template>
	<svg class="sprite-svg" v-bind:view-box.camel="viewBoxSize">
		<g v-for="(row, y) in sprite.pixelMap.rows">
			<g v-for="(pixel, x) in row">
				<rect
					v-bind:x="x * 10"
					v-bind:y="y * 10"
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
				spriteHeight = this.sprite.pixelMap.height * 10
				spriteWidth = this.sprite.pixelMap.width * 10
				viewBoxSize = Math.max(spriteHeight, spriteWidth)

				leftOffset = (spriteWidth - viewBoxSize) / 2
				topOffset = (spriteHeight - viewBoxSize) / 2
				return "#{leftOffset} #{topOffset} #{viewBoxSize} #{viewBoxSize}"

		methods:
			computeColor: (pixel)->
				"rgb(#{pixel.r},#{pixel.g},#{pixel.b})"

		mounted: () ->
			console.log(this.sprite)

</script>

<style>
.sprite-svg {
	height: 100%;
	width: 100%;
	}
</style>
