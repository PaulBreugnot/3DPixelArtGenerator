<template>
  <div>
    <new-sprite></new-sprite>

    <div class="w3-row-padding">
      <sprite v-for="sprite in sprites" v-bind:sprite="sprite"></sprite>
    </div>
  </div>
</template>

<script lang="coffee">

  import Sprite from "./sprite"
  import NewSprite from "./newSprite"

  export default

    components:
      "sprite": Sprite
      "new-sprite": NewSprite

    data: () ->
      sprites: []

    methods:
      fetchSprites: () ->
        url = "http://localhost:8000/api/sprites/"
        options=
          headers:
            "accept": "application/json"
            "origin": "127.0.0.1"
        component = this
        fetch(url)
        .catch((error) ->
          console.log error)
        .then((response) ->
          response.json()
          )
        .then((json) ->
          console.log json
          component.sprites = json
          )

    mounted: () ->
      this.fetchSprites()


</script>

<style>

</style>
