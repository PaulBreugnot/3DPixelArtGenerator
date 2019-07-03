<template>
	<div id="app">
		<header id="main-header">
			<h1 id="main_title" class="w3-center w3-text-theme">3D Pixel Art Generator</h1>
			<div class="w3-center w3-row">
				<button
					class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"
					v-bind:class="[currentTab == 'sprites' ? 'w3-theme' : '']"
					v-on:click="currentTab = 'sprites'">
						<h3>Gallery</h3>
				</button>
				<button
					class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"
					v-bind:class="[currentTab == 'editor' ? 'w3-theme' : '']"
					v-bind:disabled="!currentSprite"
					v-on:click="currentTab = 'editor'">
						<h3>Editor</h3>
				</button>
				<button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"><h3>About</h3></button>
			</div>
		</header>

		<keep-alive>
			<sprites
				v-if="currentTab == 'sprites'"
				v-on:edit-sprite="editSprite($event)">
			</sprites>
			<editor
				id="editor"
				v-if="currentTab == 'editor'"
				v-bind:sprite="currentSprite">
			</editor>
		</keep-alive>

	</div>
</template>

<script lang="coffee">

	import Sprites from "./components/gallery/sprites"
	import Editor from "./components/editor/editor"

	export default

		components:
			"sprites": Sprites
			"editor": Editor

		data: () ->
			currentTab: "sprites"
			currentSprite: null

		methods:
			selectTab: (tab) ->
				this.currentTab = tab

			editSprite: (sprite) ->
				this.currentSprite = sprite
				this.currentTab = "editor"

</script>

<style>
#main_title {
	font-weight: bold;
}

html {
	height: 99vh
}

body {
	height: 100%
}

#app {
	height: 100%
}

#main-header {
	height:10%
}

#editor {
	height: 90%
}
</style>
