<template>
  <div id="app">
    <h1 class="w3-center w3-text-theme">3D Pixel Art Generator</h1>
    <div class="w3-center w3-row">
      <button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"><h3>Sprites</h3></button>
      <button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"><h3>Settings</h3></button>
      <button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-third"><h3>About</h3></button>
    </div>

    <component v-bind:is="currentTab"></component>

  </div>
</template>

<script lang="coffee">

  import Sprites from "./components/sprites/sprites"

  export default

    components:
      "sprites": Sprites

    data: () ->
      currentTab: "sprites"

    methods:
      selectTab: (tab) ->
        this.currentTab = tab

</script>

<style>
</style>
