<script lang="ts">
  import { App } from '../core/app/app';
  import type { Simulation } from '../core/simulation/simulation';
  import Temp from './sim/Temp.svelte';

  const app = new App();
  let sim: Simulation | null = null;
  let testDesc: string = '';

  function startSim() {
    sim = app.startSimulation();
    sim.flow?.changeEvt?.subscribe((msg) => {
      testDesc = msg;
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
{#if sim}
  <Temp />
{/if}
<hr />
<button on:click={startSim}>开始模拟</button>
<button on:click={endSim}>终止模拟</button>
<button>REPLAY</button>
