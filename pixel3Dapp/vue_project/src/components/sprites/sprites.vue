<template>
  <div>
    <new-sprite></new-sprite>
    <sprite v-for="sprite in sprites"></sprite>
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


</script>

<style>

</style>
