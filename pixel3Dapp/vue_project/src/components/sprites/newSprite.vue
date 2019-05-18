<template>
  <div>

    <button
      class="w3-btn w3-block w3-theme w3-margin-top w3-xlarge"
      v-on:click="showNewSprite = !showNewSprite">
      <i
        class="fa fa-lg w3-left w3-padding"
        v-bind:class="{ 'fa-angle-up': !showNewSprite, 'fa-angle-down': showNewSprite}"></i>
        Upload new sprite
    </button>

    <form class="w3-container w3-margin w3-animate-opacity w3-animate-zoom" v-bind:class="{ 'w3-hide': !showNewSprite }">
      <label class="w3-text-theme"><b>Sprite Name</b></label>
      <input class="w3-input w3-border w3-light-grey" type="text" v-model="spriteName">

      <label class="w3-text-theme"><b>Select File</b></label>
      <input type="file" class="w3-input w3-border-0" v-on:change="selectFile">

      <button class="w3-btn w3-theme w3-margin-top" v-on:click="uploadNewSprite()">Upload!</button>
    </form>
  </div>
</template>

<script lang="coffee">

  export default
    data: () ->
      showNewSprite: false
      selectedFile: null
      spriteName: ""

    methods:
      selectFile: (event) ->
        this.selectedFile = event.target.files[0]
        re = /(\w+)\.\w+$/
        if re.test(this.selectedFile.name)
          this.spriteName = re.exec(this.selectedFile.name)[1]
        else
          this.spriteName = this.selectedFile.name
        console.log this.spriteName

      uploadNewSprite: () ->
        url = "http://localhost:8000/api/sprites/"
        formData = new FormData()
        formData.append("name", this.spriteName)
        formData.append("sprite", this.selectedFile)

        options =
          method: "POST"
          body:
            formData

        fetch(url, options)
        .then((response) ->
          console.log(response)
        )
</script>

<style>
</style>
