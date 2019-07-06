<template>
	<div id="app">
		<div
			class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"
			id="main-sidebar"
			v-bind:style="{display : sideBarDisplay}"
			>
  			<button
				class="w3-bar-item w3-button w3-large w3-hide-large"
				v-on:click="sideBarDisplay = 'none'"
				>Close &times;</button>
				<button
					class="w3-bar-item w3-button w3-xlarge"
					v-bind:class="[currentTab == 'home' ? 'w3-theme-l1' : '']"
					v-on:click="currentTab = 'home'">
						Home
				</button>
				<button
					class="w3-bar-item w3-button w3-xlarge"
					v-bind:class="[currentTab == 'sprites' ? 'w3-theme-l1' : '']"
					v-on:click="currentTab = 'sprites'">
						Gallery
				</button>
				<button
					class="w3-bar-item w3-button w3-xlarge"
					v-bind:class="[currentTab == 'editor' ? 'w3-theme' : '']"
					v-bind:disabled="!currentSprite"
					v-on:click="currentTab = 'editor'">
						Editor
				</button>
		</div>
		<div class="w3-main" id="main-body">
		<header id="main-header" class="w3-cell-row w3-theme">
			<button class="w3-button w3-theme w3-xlarge w3-hide-large w3-cell" v-on:click="sideBarDisplay='block'">&#9776;</button>
			<h1 id="main_title" class="w3-center w3-theme">3D Pixel Art Generator</h1>
		<!--	<div class="w3-center w3-row">
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
		</div> -->
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
			sideBarDisplay: "block"
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

#main-body {
	margin-left: 300px;
	height: 100%;
}

#main-header {
	height:5%
}

#main-sidebar {
	width:300px; 
}

#editor {
	height: 95%
}
</style>
