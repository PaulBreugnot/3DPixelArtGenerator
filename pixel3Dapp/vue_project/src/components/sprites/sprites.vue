<template>
  <div>
    <delete-sprite
      v-if="selectedSprite"
      v-bind:sprite="selectedSprite"
      v-bind:display="showConfirmDelete"
      v-on:hide-delete="hideDelete"
      v-on:delete-sprite="deleteSprite">
    </delete-sprite>
    <new-sprite></new-sprite>
    <div class="w3-row-padding">
        <div v-for="sprite in sprites" class="w3-col l4 m6 s12 w3-padding-16">
          <sprite v-bind:sprite="sprite" v-on:confirm-delete="confirmDelete"></sprite>
        </div>
    </div>
  </div>
</template>

<script lang="coffee">

  import Sprite from "./sprite"
  import NewSprite from "./newSprite"
  import DeleteSprite from "./deleteSprite"

  export default

    components:
      "sprite": Sprite
      "new-sprite": NewSprite
      "delete-sprite": DeleteSprite

    data: () ->
      sprites: []
      selectedSprite: null
      showConfirmDelete: false

    methods:
      fetchSprites: () ->
        url = "http://localhost:8000/api/sprites/"
        options=
          headers:
            "accept": "application/json"
        component = this
        fetch(url)
        .catch((error) ->
          console.log error)
        .then((response) ->
          console.log response
          response.json()
          )
        .then((json) ->
          console.log json
          component.sprites = json
          )

      confirmDelete: (sprite) ->
        this.selectedSprite = sprite
        this.showConfirmDelete = true

      hideDelete: () ->
        this.showConfirmDelete = false

      deleteSprite: (sprite) ->
        deleted = false
        index = 0
        until deleted
          if this.sprites[index].id == sprite.id
            this.sprites.splice(index, 1)
            deleted = true
          index++

        this.hideDelete()

    mounted: () ->
      this.fetchSprites()


</script>

<style>

</style>
