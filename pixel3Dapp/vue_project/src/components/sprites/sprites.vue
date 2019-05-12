<template>
  <div>
    <sprite v-for="sprite in sprites"></sprite>
  </div>
</template>

<script lang="coffee">

  import Sprite from "./sprite"

  export default

    components:
      "sprite": Sprite

    data:
      sprites: []


</script>

<style>

</style>
