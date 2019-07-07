<template>

	<div class="w3-container">
		<h1 id="home-title" class="w3-center"> <b>Welcome to UNIPIX 1.0!</b> </h1>
		<div id="home-content" class="w3-container w3-center">
			<p>
			<b class="w3-wide w3-text-red">UNIPIX</b> is a Web Application that allows you to easily generate 3D models
				from your favourite retro game sprites and pixel arts.
			</p>
			<div class="w3-container w3-center">
					<img :src="`${publicPath}kirby_2d.png`" height="200px" class="w3-margin-right"/>
					<img :src="`${publicPath}kirby_3d.png`" height="200px" class="w3-margin-left"/>
			</div>
			<p>
				No 3D modeling skills are required to build your models : the algorithm handles a base
				model generation for you, that you can edit and customize simply by changing color
				heights from the editor. You can then export your model as an .stl file, ready to load
				in your favourite 3D slicer.
			</p>
			<div class="w3-cell-row w3-padding-16 w3-center">
				<div class="w3-cell w3-mobile">
					<h3><b>1. Choose a sprite</b></h3>
					<img :src="`${publicPath}vile_2d.png`" height="300px"/>
				</div>
				<div class="w3-cell w3-mobile">
					<h3><b>2. Import it and build your model</b></h3>
					<img :src="`${publicPath}vile_3d.png`" height="300px"/>
				</div>
				<div class="w3-cell w3-mobile">
					<h3><b>3. Print it!</b></h3>
					<img :src="`${publicPath}vile_print.JPG`" height="300px"/>
				</div>
				<div class="w3-cell w3-mobile">
					<h3><b>4. (Optional) Paint it!</b></h3>
					<img :src="`${publicPath}vile_paint.png`" height="300px"/>
				</div>
			</div>
			<div class="w3-container w3-margin-top">
				<button class="w3-button w3-blue w3-xxlarge w3-round-large" v-on:click="$emit('update:currentTab', 'sprites')">Start Building Your Sprites!</button>
			</div>

		</div>
	</div>

</template>

<script lang="coffee">

	export default

		data: () ->
			publicPath: process.env.BASE_URL

</script>


<style>
#home-title {
	margin-top: 32px;
}

#home-content {
	font-size: 25px;
}
</style>
