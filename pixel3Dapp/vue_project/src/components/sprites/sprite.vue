<template>
  <div class="w3-col l4 m6 s12 w3-padding-16">
    <div class="w3-card">
      <header class="w3-container w3-theme l1">
        <h2>{{ sprite.name }}</h2>
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



</script>

<style>

</style>
