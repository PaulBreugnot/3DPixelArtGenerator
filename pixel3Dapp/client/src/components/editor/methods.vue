<template>
	<div class="w3-dropdown-click">
		<button class="w3-button" v-on:click="toggle()">
			<i class="fa fa-angle-down" aria-hidden="true"></i>
			{{selectedMethod}}
		</button>
		<div id="Demo" class="w3-dropdown-content w3-bar-block w3-border" v-bind:class="[ show ? 'w3-show' : 'w3-hide' ]">
			<button v-for="method in methods" class="w3-bar-item w3-button">{{method}}</button>
		</div>
	</div>
</template>

<script lang="coffee">

	export default

		data: () ->
			methods: ["default", "hue"]
			selectedMethod: "default"
			show: false

		methods:
			toggle: () ->
				this.show = !this.show

</script>

