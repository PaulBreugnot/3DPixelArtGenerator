<template>
  <div class="w3-container">
    <canvas class="spriteCanvas" v-bind:ref="canvasName">
    </canvas>
  </div>
</template>

<script lang="coffee">
  import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, StandardMaterial, Color3 } from 'babylonjs';
  import 'babylonjs-loaders'

  createScene = (engine, canvas) ->
    # Create a basic BJS Scene object.
    scene = new Scene(engine);

    # Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    camera = new FreeCamera('camera', new Vector3(10, 20, 0), scene);

    # Target the camera to scene origin.
    camera.setTarget(Vector3.Zero());

    # Attach the camera to the canvas.
    camera.attachControl(canvas, false);

    # Create a basic light, aiming 0,1,0 - meaning, to the sky.
    light = new HemisphericLight('light1', new Vector3(0,1,0), scene);

    # # Create a built-in "sphere" shape.
    # sphere = MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);
    #
    # # Move the sphere upward 1/2 of its height.
    # sphere.position.y = 1;
    #
    # Create a built-in "ground" shape.
    ground = MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);

    # Return the created scene.
    return scene;

  export default

    props:
      ['sprite']

    computed:
      canvasName: () ->
        "canvas_#{this.sprite.id}"

    mounted: () ->
      console.log(this.canvasName)
      console.log(this.$refs)
      canvas = this.$refs[this.canvasName]
      engine = new Engine(canvas, true)
      scene = createScene(engine, canvas);

      if(this.sprite.model3d)
        fileName = this.sprite.model3d.match(/.*\/(.*$)/)[1]
        rootUrl = this.sprite.model3d.replace(fileName, "")
        console.log(fileName)
        console.log(rootUrl)
        SceneLoader.ImportMesh("", rootUrl, fileName, scene, (newMeshes) ->
          colorMesh = (mesh, scene) ->
            myMaterial = new StandardMaterial("myMaterial", scene);
            myMaterial.diffuseColor = new Color3(1, 0, 1);
            mesh.material = myMaterial
          colorMesh(mesh, scene) for mesh in newMeshes
          console.log(newMeshes)
        )

      engine.runRenderLoop(() ->
          scene.render();
      );

      window.addEventListener('resize', () ->
        engine.resize();
      );

</script>

<style>

.spriteCanvas {
  width: 100%;
  height: 100%;
}
</style>
