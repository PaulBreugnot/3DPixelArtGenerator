<template>
	<div
		class="w3-modal"
		v-bind:style="{display: modalDisplay}"
		>
		<div class="w3-modal-content">

		<header class="w3-theme w3-bar">
			<h3 class="w3-bar-item">Upload new sprite</h3>
			<button
				class="w3-button w3-bar-item w3-right w3-theme"
				v-on:click="$emit('update:display', false)"
				>
				<i class="fa fa-times fa-lg">
				</i>
			</button>
		</header>

		<div class="w3-container w3-margin w3-animate-opacity w3-animate-zoom w3-padding-16">
			<label class="w3-text-theme"><b>Sprite Name</b></label>
			<input class="w3-input w3-border w3-light-grey" type="text" v-model="spriteName">

			<div class="w3-margin-top">
			<label class="w3-text-theme w3-margin-top"><b>Select File</b></label>
			<input type="file" class="w3-input w3-border-0" v-on:change="selectFile">
			</div>

			<div class="w3-margin-top">
				<div class="w3-cell">
					<button class="w3-btn w3-theme" v-on:click="uploadNewSprite()" v-bind:disabled="processing">
						<span v-if="!processing">
						Upload!
						</span>
						<span v-else>
						processing...
						</span>
					</button>
				</div>
				<div v-if="processing" class="w3-cell">
					<i class="fa fa-circle-o-notch fa-spin fa-lg fa-fw"></i>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script lang="coffee">

	export default
		props:
			display:
				type: Boolean
				required: true

		data: () ->
			showNewSprite: false
			selectedFile: null
			spriteName: ""
			processing: false

		computed:
			modalDisplay: () ->
				if this.display then "block" else "none"

		methods:
			selectFile: (event) ->
				this.selectedFile = event.target.files[0]
				re = /(\w+)\.\w+$/
				if re.test(this.selectedFile.name)
					this.spriteName = re.exec(this.selectedFile.name)[1]
				else
					this.spriteName = this.selectedFile.name
				console.log this.spriteName

			uploadNewSprite: () ->
				this.processing = true
				url = "http://localhost:8000/api/sprites/"
				formData = new FormData()
				formData.append("name", this.spriteName)
				formData.append("sprite", this.selectedFile)

				options =
					method: "POST"
					body:
						formData

				self = this
				fetch(url, options)
				.catch((error) ->
					console.log(error)
					)
				.then((response) ->
					response.json()
					)
				.then((json) ->
					self.processing = false
					console.log(json)
					self.processSprite(json.id)
					self.$emit('update:display', false)
					)

			processSprite: (id) ->
				url = "http://localhost:8000/api/sprites/#{id}/process/"
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
					console.log(json)
					self.$emit("new-sprite", json)
					)
</script>

<style>
</style>
