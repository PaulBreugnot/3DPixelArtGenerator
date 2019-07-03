<template>
	<div class="w3-dropdown-click">
		<button class="w3-button w3-theme" v-on:click="toggle()">
				<i class="fa fa-angle-down" aria-hidden="true"></i>
				Select profile
		</button>
		<div id="Demo" class="w3-dropdown-content w3-bar-block w3-border" v-bind:class="[ show ? 'w3-show' : 'w3-hide' ]">
				<button v-for="profile in profiles" class="w3-bar-item w3-button">{{profile}}</button>
		</div>
	</div>
</template>

<script lang="coffee">

	export default

		data: () ->
			profiles: ["default"]
			show: false

		methods:
			toggle: () ->
				this.show = !this.show

</script>

