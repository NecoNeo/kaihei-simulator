import { FlowExecutor } from '../flow/flow';

export class Simulation {
  flow?: FlowExecutor;
  constructor() {}

  start() {
    this.flow = new FlowExecutor();
    this.flow.start();
  }
}
