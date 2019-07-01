<template>
	<div class="w3-bar w3-theme-l4">
		<button
			class="w3-button w3-bar-item toolbar-button w3-large"
			v-bind:disabled="!currentlyUpdating"
			v-on:click="save">
			<i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
			Save
		</button>

		<button class="w3-button w3-bar-item toolbar-button w3-large">
			<i class="fa fa-download fa-lg" aria-hidden="true"></i>
			Load Profile
		</button>

		<button class="w3-button w3-bar-item toolbar-button w3-large" disabled>
			<i class="fa fa-upload fa-lg" aria-hidden="true"></i>
			Save Profile
		</button>

		<button
			class="w3-button w3-bar-item toolbar-button w3-large"
			v-on:click="exportSprite"
			>
			<i class="fa fa-rocket fa-lg" aria-hidden="true"></i>
			Download STL	
		</button>

		<methods class="w3-bar-item w3-border-left w3-border-theme toolbar-button"></methods>
		<button
			class="w3-button w3-bar-item w3-border-right w3-border-theme toolbar-button w3-large"
			v-on:click="processSprite"
			>
			<i class="fa fa-refresh fa-lg" aria-hidden="true"></i>
			Re-build	
		</button>

	</div>
</template>

<script lang="coffee">
import Methods from "./methods"

export default
	components:
		"methods": Methods
	
	computed:
		currentlyUpdating: () ->
			Object.keys(this.updates.colorMapItems).length or this.updates.maxHeight or this.updates.pixelSize
	
	props:
		sprite:
			type: Object
			required: true

		updates:
			type: Object
			required: true

	methods:
		save: () ->
			console.log(this.updatedColorItems)

			url = "#{process.env.VUE_APP_SERVER_ROOT}/api/color_maps/#{this.sprite.colorMap.id}/"

			options =
				method: "PATCH"
				body:
					JSON.stringify(this.updates)
				headers:
					"Content-Type": "application/json"

			console.log options.body

			self = this
			fetch(url, options)
			.catch((error) ->
				console.log error
			)
			.then((response) ->
				console.log response
				self.updates.colorMapItems = []
				self.$delete(self.updates, "maxHeight")
				self.$delete(self.updates, "pixelSize")
			)

		processSprite: () ->
			url = process.env.VUE_APP_SERVER_ROOT + "/api/sprites/" + this.sprite.id + "/process/"

			options =
				method: "PUT"

			self = this
			fetch(url, options)
			.catch((error) ->
				console.log(error)
				)
			.then((response) ->
				response.json()
				)
			.then((json) ->
				self.sprite.colorMap = json.colorMap
				console.log self.sprite
				self.$emit("reprocess")
			)
	
		exportSprite: () ->
			url = process.env.VUE_APP_SERVER_ROOT + "/api/sprites/" + this.sprite.id + "/export/"

			options =
				method: "PUT"

			self = this
			fetch(url, options)
			.catch((error) ->
				console.log(error)
				)
			.then((response) ->
				response.json()
				)
			.then((json) ->
				console.log json
				link = document.createElement("a")
				link.href = "#{process.env.VUE_APP_SERVER_ROOT}#{json.model3d}"
				link.click()
			)

</script>

<style>
.toolbar-button {
	height: 100%
}
</style>
