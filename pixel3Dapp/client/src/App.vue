<template>
	<div id="app">
		<div class="w3-main" id="main-body">
		<header id="main-header" class="w3-bar w3-bottombar w3-border-theme">
			<button
				class="w3-bar-item w3-button w3-xlarge top-button w3-wide w3-text-red"
				v-bind:class="[currentTab == 'home' ? 'w3-theme' : '']"
				v-on:click="currentTab = 'home'">
				UNIPIX
			</button>
			<button
				class="w3-bar-item w3-button w3-xlarge top-button"
				v-bind:class="[currentTab == 'sprites' ? 'w3-theme' : '']"
				v-on:click="currentTab = 'sprites'">
					Gallery
			</button>
			<button
				class="w3-bar-item w3-button w3-xlarge top-button"
				v-bind:class="[currentTab == 'editor' ? 'w3-theme' : '']"
				v-bind:disabled="!currentSprite"
				v-on:click="currentTab = 'editor'">
					Editor
			</button>
			<button
				class="w3-bar-item w3-button w3-xlarge top-button"
				v-bind:class="[currentTab == 'manual' ? 'w3-theme' : '']"
				v-on:click="currentTab = 'manual'">
				Manual
			</button>
			<a
				class="w3-bar-item w3-button w3-right  w3-xlarge top-button w3-hover-black"
				href="https://github.com/PaulBreugnot/UniPix"
				target="_blank"
				>
				<i class="fa fa-github fa-lg" aria-hidden="true"></i>
				GitHub
			</a>
			<a
				class="w3-bar-item w3-button w3-right  w3-xlarge top-button w3-text-blue w3-hover-blue"
				href="https://twitter.com/PaulBreugnot"
				target="_blank"
				>
				<i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
				Twitter
			</a>
			<a
				class="w3-bar-item w3-button w3-right  w3-xlarge top-button w3-text-deep-purple w3-hover-deep-purple"
				href="https://join.slack.com/t/pixled/shared_invite/enQtNjYwMDczNTg3Mjk2LTJiMjZkMzhiZjgzYmVjNTgxZWViYmU3NjYzOWUzMWU5ZTQ4YmMyZjRiMzRjNjAxMjcxZTkwMTQyMmNkM2RmODM"
				target="_blank">
				<i class="fa fa-slack" aria-hidden="true"></i>
				Slack
			</a>
		</header>

		<keep-alive>
			<home
				v-if="currentTab == 'home'"
				v-on:update:currentTab="currentTab = $event"/>
			<sprites
				v-if="currentTab == 'sprites'"
				v-bind:sprites="sprites"
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

	import Home from "./components/home/home"
	import Sprites from "./components/gallery/sprites"
	import Editor from "./components/editor/editor"

	export default

		components:
			"home": Home
			"sprites": Sprites
			"editor": Editor

		data: () ->
			sprites: []
			sideBarDisplay: "block"
			currentTab: "home"
			currentSprite: null

		methods:
			selectTab: (tab) ->
				this.currentTab = tab

			editSprite: (sprite) ->
				this.currentSprite = sprite
				this.currentTab = "editor"

			fetchSprites: () ->
				url = "http://localhost:8000/api/sprites/"
				options=
					headers:
						"accept": "application/json"
				self = this
				fetch(url)
				.catch((error) ->
					console.log error)
				.then((response) ->
					console.log response
					response.json()
					)
				.then((json) ->
					console.log json
					self.sprites = json
					)

		mounted: () ->
			this.fetchSprites()


</script>

<style>
#main-title {
	height: 100%;
	font-weight: bold;
}

html {
	height: 99vh
}

body {
	height: 100%
}

.top-button {
	height: 100%;
	min-width: 100px;
}

#app {
	height: 100%
}

#main-body {
	margin-left: 0px;
	height: 100%;
}

#main-header {
	height:5%
}

#main-sidebar {
	width:150px; 
}

#editor {
	height: 95%
}
</style>
