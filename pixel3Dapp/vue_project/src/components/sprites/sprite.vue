<template>
  <div class="w3-col l4 m6 s12 w3-padding-16">
    <div class="w3-card">
      <header v-if="!renaming" class="w3-cell-row w3-theme-d1">
        <div class="w3-container w3-cell w3-cell-middle"><h4>{{ sprite.name }}</h4></div>

        <div class="w3-dropdown-hover w3-cell w3-cell-middle w3-right w3-margin">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
          <div id="Demo" class="w3-dropdown-content w3-bar-block w3-border">
            <button class="w3-bar-item w3-button" v-on:click="rename()">Rename</button>
            <button class="w3-bar-item w3-button">Delete</button>
          </div>
        </div>

      </header>

      <header v-else class="w3-cell-row w3-theme-d1">
        <div class="w3-container w3-cell w3-cell-middle">
          <input class="w3-input w3-theme-l1 w3-border-0" type="text" v-model="sprite.name"></input>
        </div>
        <div class="w3-container w3-cell w3-cell-middle">
          <button class="w3-button w3-right w3-hover-theme w3-theme-l1" v-on:click="renamimgMode()">OK</button>
        </div>
      </header>

      <div class="w3-row w3-center">
        <button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half">2D Sprite</button>
        <button class="w3-button w3-bottombar w3-border-theme w3-hover-theme w3-half">3D Model</button>
      </div>
      <div class="w3-margin w3-center">
        <svg v-if="sprite && sprite.rgb_array.length" width="100%" height="100%" v-bind:view-box.camel="viewBoxSize">
          <g v-for="(line, line_index) in sprite.rgb_array">
            <g v-for="(pixel, pixel_index) in line">
              <rect
                v-bind:x="pixel_index * 10"
                v-bind:y="line_index * 10"
                width="10" height="10"
                v-bind:style="{fill: computeColor(pixel)}" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">

  export default

    props:
      ['sprite']

    data: () ->
      renaming: false

    computed:
      viewBoxSize: () ->
        height = Math.max(this.sprite.rgb_array.length * 10, this.sprite.rgb_array[0].length * 10)
        width = height
        return "0 0 #{width} #{height}"

    methods:
      computeColor: (pixel)->
        if pixel[3] != 0
          "rgb(#{pixel[0]},#{pixel[1]},#{pixel[2]})"
        else
          "rgba(0, 0, 0, 0)"

      renamimgMode: () ->
        this.renaming = true

      renameSprite: () ->
        url = "SJDH"



</script>

<style>
 header {
   min-height: 60px;
 }
</style>
