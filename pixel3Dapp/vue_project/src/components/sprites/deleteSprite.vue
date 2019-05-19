<template>
  <div class="w3-modal" v-bind:class="{ 'w3-hide': !display, 'w3-show': display}">
      <div class="w3-modal-content">
        <header class="w3-container w3-center w3-theme-l1">
          <h3>Do you really want to delete this sprite?</h3>
        </header>
        <div class="w3-container w3-center w3-row-padding">
          <div class="w3-col l4 m3 s0 w3-padding-16"/>
          <div class="w3-col l4 m6 s12 w3-padding-16">
              <sprite v-bind:sprite="sprite" v-bind:display-tools="false"/>
          </div>
          <div class="w3-col l4 m3 s0 w3-padding-16"/>
        </div>
        <footer class="w3-container w3-cell-row w3-center">
          <button class="w3-button w3-theme w3-xlarge w3-cell w3-margin" v-on:click="$emit('hide-delete')">Cancel</button>
          <button class="w3-button w3-red w3-xlarge w3-cell w3-margin" v-on:click="deleteSprite()">Delete</button>
        </footer>
      </div>
  </div>
</template>

<script lang="coffee">

  import Sprite from "./sprite"

  export default

    props: ['display', 'sprite']

    components:
      "sprite": Sprite

    methods:
      deleteSprite: () ->
        url = "http://localhost:8000/api/sprites/#{this.sprite.id}/"
        options =
          method: "DELETE"

        self = this
        fetch(
          url,
          options
          )
        .catch((error) ->
          console.log error
          )
        .then((response) ->
          self.$emit('delete-sprite', self.sprite)
          )


</script>

<style>

</style>
