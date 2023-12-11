<script lang="ts">
  import { App } from '../core/app/app';
  import type { Scene } from '../core/scenes/base';
  import type { Simulation } from '../core/simulation/simulation';
  import Temp from './sim/Temp.svelte';

  const app = new App();
  let sim: Simulation | null = null;
  let testDesc: string = '';
  let rootScene: Scene;

  function startSim() {
    sim = app.startSimulation();
    sim.flow?.changeEvt?.subscribe((msg) => {
      testDesc = msg;
      if (sim?.flow?.cacheScene) rootScene = sim.flow.cacheScene;
    });
  }
  function endSim() {
    // TODO sim termination
    sim = null;
    testDesc = '';
  }
</script>

<div>SIMULATION in developing...</div>
<div>app:</div>
<div>{sim}</div>
<div>{testDesc || '...'}</div>
<div style="width: 1px; height: 100px"></div>
{#if rootScene}
  <Temp scene={rootScene} />
{/if}
<hr />
<button on:click={startSim}>开始模拟</button>
<button on:click={endSim}>终止模拟</button>
<button>REPLAY</button>
