import { Simulation } from '../simulation/simulation';

export class App {
  constructor() {}

  startSimulation(type?: string) {
    console.log('simulation type', type);
    const sim = new Simulation();
    sim.start();
    return sim;
  }
}
