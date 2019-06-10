<template>
	<div>
		<toolbar id="editor-toolbar"></toolbar>
		<div id="editor-body" class="w3-cell-row">
			<div id="sprite-view" class="w3-cell">
				<sprite-3d v-bind:sprite="sprite"></sprite-3d>
			</div>
			<div class="w3-cell w3-cell-top w3-bar-block" style="width:20%">
				<h3 id="size-title" class="w3-bar-item w3-center w3-border-top w3-border-theme">Size</h3>
				<form class="w3-container">
					<label class="w3-text-theme"><b>Pixel Width</b></label>
					<input class="w3-input w3-border" v-model="pixelWidth" type="number">
					<label class="w3-text-theme"><b>Max Height</b></label>
					<input class="w3-input w3-border" v-model="maxHeight" type="number">
				</form>

				<h3 class="w3-bar-item w3-center w3-border-top w3-border-theme">ColorMap</h3>
			</div>
		</div>
	</div>
</template>

<script lang="coffee">
import Toolbar from "./toolbar"
import Sprite3D from "../gallery/sprite3d"
import Methods from "./methods"
import Profiles from "./profiles"

export default
	components:
		"toolbar": Toolbar
		"sprite-3d":Sprite3D
		"methods": Methods
		"profiles": Profiles

	data: () ->
		pixelWidth: 5
		maxHeight: 10

	props:
		["sprite"]

	
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
	height:95%
}

#size-title {
	margin-top: 0px;
}
</style>
