<!-- A component just for developing -->

<script lang="ts">
  import type { Scene } from '../../core/scenes/base';
  export let scene: Scene;

  console.log('dev');
</script>

<div>
  {scene.name}
  {#each scene.children as childScene}
    <svelte:self scene={childScene} />
  {/each}
</div>

<style>
  div {
    box-sizing: border-box;
    padding: 26px;
    border: solid 1px #f0f0f0;
  }
</style>
