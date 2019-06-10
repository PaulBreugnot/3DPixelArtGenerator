<template>
	<div class="w3-bar w3-theme-l4">
		<button class="w3-button w3-bar-item toolbar-button w3-large">
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

		<button class="w3-button w3-bar-item toolbar-button w3-large">
			<i class="fa fa-rocket fa-lg" aria-hidden="true"></i>
			Download STL	
		</button>

		<methods class="w3-bar-item w3-border-left w3-border-theme toolbar-button"></methods>
		<button class="w3-button w3-bar-item w3-border-right w3-border-theme toolbar-button w3-large">
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

</script>

<style>
.toolbar-button {
	height: 100%
}
</style>
