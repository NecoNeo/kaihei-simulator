<!-- A component just for developing -->

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Scene } from '../../core/scenes/base';
  import type { Component } from '../../core/components/component';
  import type { Subscription } from 'rxjs';
  export let scene: Scene & { values?: Component };

  console.log('dev');

  let value: number;
  let subsr: Subscription;
  onMount(() => {
    if (scene.values) {
      subsr = scene.values.subscribe((v) => {
        value = v.value;
      });
    }
  });
  onDestroy(() => {
    subsr?.unsubscribe();
  });
</script>

<div class="container">
  {scene.name}
  <div class="data-cont">
    v: {value ?? ''}
  </div>
  {#each scene.children as childScene}
    <svelte:self scene={childScene} />
  {/each}
</div>

<style lang="scss">
  .container {
    box-sizing: border-box;
    padding: 26px;
    border: solid 1px #f0f0f0;

    .data-cont {
      margin: 6px;
      padding: 20px;
    }
  }
</style>
