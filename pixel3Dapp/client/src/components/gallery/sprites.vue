<template>
	<div>
		<delete-sprite
			v-if="selectedSprite"
			v-bind:sprite="selectedSprite"
			v-bind:display="showConfirmDelete"
			v-on:hide-delete="hideDelete"
			v-on:delete-sprite="deleteSprite">
		</delete-sprite>
		<new-sprite v-on:new-sprite="addNewSprite" v-bind:display.sync="displayNewSprite"></new-sprite> 
		<button
			class="w3-button w3-xlarge w3-round-large w3-margin-left w3-margin-top w3-blue"
			v-on:click="displayNewSprite = true"
			>
			<i class="fa fa-upload fa-lg" aria-hidden="true"></i>
			Upload New Sprite
		</button>
		<div class="w3-row-padding">
				<div v-for="sprite in sprites" class="w3-col l4 m6 s12 w3-padding-16">
					<sprite
						v-bind:sprite="sprite"
						v-on:confirm-delete="confirmDelete"
						v-on:edit-sprite="$emit('edit-sprite', $event)"
					></sprite>
				</div>
		</div>
	</div>
</template>

<script lang="coffee">

	import Sprite from "./sprite"
	import NewSprite from "./newSprite"
	import DeleteSprite from "./deleteSprite"

	export default

		components:
			"sprite": Sprite
			"new-sprite": NewSprite
			"delete-sprite": DeleteSprite

		props:
			sprites:
				type: Array
				required: true

		data: () ->
			selectedSprite: null
			displayNewSprite: false
			showConfirmDelete: false

		methods:
			confirmDelete: (sprite) ->
				this.selectedSprite = sprite
				this.showConfirmDelete = true

			hideDelete: () ->
				this.showConfirmDelete = false

			deleteSprite: (sprite) ->
				deleted = false
				index = 0
				until deleted
					if this.sprites[index].id == sprite.id
						this.sprites.splice(index, 1)
						deleted = true
					index++

				this.hideDelete()

			addNewSprite: (sprite) ->
				this.sprites.unshift(sprite)



</script>

<style>

</style>
