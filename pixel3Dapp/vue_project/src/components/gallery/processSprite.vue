<template>
  <div id="processContainer" class="w3-display-container">
    <button
      class="w3-button w3-theme w3-display-middle w3-xlarge"
      v-on:click="processSprite()"
      >
      <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>
      Generate Model
    </button>
  </div>
</template>

<script lang="coffee">

  export default

    props:
      "sprite":
        type: Object
        required: true

    methods:
      processSprite: () ->
        url = process.env.VUE_APP_SERVER_ROOT + "/api/sprites/" + this.sprite.id + "/process/"

        options =
          method: "PUT"

        self = this
        fetch(url, options)
        .catch((error) ->
          console.log(error)
          )
        .then((response) ->
          response.json()
          )
        .then((json) ->
          self.$emit("sprite-process", self.sprite, json)
          )

</script>

<style>

#processContainer {
  height:300px;
  width:100%;
}
</style>
