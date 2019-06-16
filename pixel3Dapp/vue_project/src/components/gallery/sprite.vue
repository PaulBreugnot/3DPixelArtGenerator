<template>
	<div v-if="sprite" class="w3-card">
		<header v-if="!renaming" class="w3-cell-row w3-padding w3-theme-d1">
			<div v-if="displayTools" class="w3-dropdown-hover w3-cell w3-cell-middle w3-theme-d1">
				<i class="fa fa-bars fa-2x" aria-hidden="true"></i>
				<div class="w3-dropdown-content w3-bar-block w3-border">
					<button class="w3-bar-item w3-button" v-on:click="renamimgMode()">
							<i class="fa fa-pencil" aria-hidden="true"></i>
							Rename
					</button>
					<button class="w3-bar-item w3-button w3-text-red" v-on:click="$emit('confirm-delete', sprite)">
							<i class="fa fa-trash-o" aria-hidden="true"></i>
							Delete
					</button>
					<button class="w3-bar-item w3-button" v-on:click="$emit('edit-sprite', sprite)">
							<i class="fa fa-cubes" aria-hidden="true"></i>
							Edit Model	
					</button>
				</div>
			</div>
			<div class="w3-container w3-cell w3-cell-middle"><h4>{{ sprite.name }}</h4></div>
		</header>

		<header v-else class="w3-cell-row w3-theme-d1">
			<div class="w3-container w3-cell w3-cell-middle">
				<input class="w3-input w3-theme-l1 w3-border-0" type="text" v-model="sprite.name"></input>
			</div>
			<div class="w3-container w3-cell w3-cell-middle">
				<button class="w3-button w3-right w3-hover-theme w3-theme-l1" v-on:click="renameSprite()">OK</button>
			</div>
		</header>

		<div class="w3-row w3-center">
			<button
				class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half"
				v-bind:class="[currentTab == 'sprite-2d' ? 'w3-theme-d1' : '']"
				v-on:click="currentTab = 'sprite-2d'">
				2D Sprite
			</button>
			<button
				class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half"
				v-bind:class="[currentTab == 'sprite-3d' ? 'w3-theme-d1' : '']"
				v-on:click="currentTab = 'sprite-3d'">
				3D Model
			</button>
		</div>
		<div class="sprite-view w3-padding-16 w3-center">
			<!-- <sprite-2d v-bind:sprite="sprite"/> -->
			<sprite-2d v-if="currentTab=='sprite-2d'" v-bind:sprite="sprite"></sprite-2d>
			<sprite-3d v-if="(currentTab=='sprite-3d') && sprite.colorMap" v-bind:sprite="sprite"></sprite-3d>
			<process-sprite
				v-if="(currentTab=='sprite-3d') && !sprite.colorMap"
				v-bind:sprite="sprite"
				v-on:sprite-process="handleSpriteProcess"></process-sprite>
		</div>
	</div>
</template>

<script lang="coffee">

	import Sprite2d from "./sprite2d"
	import Sprite3d from "./sprite3d"
	import ProcessSprite from "./processSprite"

	export default

		props:
			'sprite':
				type: Object
				required: true
			'displayTools':
				type: Boolean
				required: false
				default: true

		components:
			"sprite-2d": Sprite2d
			"sprite-3d": Sprite3d
			"process-sprite": ProcessSprite

		data: () ->
			renaming: false
			currentTab: "sprite-2d"

		methods:

			renamimgMode: () ->
				this.renaming = true

			renameSprite: () ->
				url = "http://localhost:8000/api/sprites/#{this.sprite.id}/"
				options =
					method: "PATCH"
					headers:
						"content-type": "application/json"
					body:
						JSON.stringify({"name": "#{this.sprite.name}"})

				self = this
				fetch(
					url,
					options
					)
				.catch((error) ->
					console.log error
					)
				.then((response) ->
					response.json()
					)
				.then((json) ->
						self.sprite.name = json.name
						self.renaming = false
					)

			handleSpriteProcess: (sprite, processResponse) ->
				console.log(processResponse)
				sprite.colorMap = processResponse.colorMap

</script>

<style>
 header {
	 min-height: 60px;
 }

 .sprite-view {
	height: 30vh;
	width: 100%;
	}
</style>
