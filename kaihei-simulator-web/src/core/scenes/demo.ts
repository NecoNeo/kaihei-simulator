import { sleep } from '../../utils/common';
import { Component } from '../components/component';
import { Scene } from './base';

export class DemoScene extends Scene {
  values = new Component({ value: 0 });

  constructor() {
    super();
    this.name = 'DemoScene';
  }

  async play() {
    console.log(`play scene:<${this.name}>`);
    for (let i = 0; i < 10; i++) {
      await sleep(100);
      const prev = this.values.getValues().value;
      this.values.setValues({ value: prev + 1 });
    }
    const s1 = this.createChildScene('DemoSceneNested');
    await s1.play();

    for (let i = 0; i < 10; i++) {
      await sleep(100);
      const prev = this.values.getValues().value;
      this.values.setValues({ value: prev + 1 });
    }

    const s2 = this.createChildScene('DemoSceneNested');
    await s2.play();

    console.log('end');
  }
}

export class DemoSceneNested extends Scene {
  values = new Component({ value: 0 });

  constructor() {
    super();
    this.name = 'DemoSceneNested';
  }

  async play() {
    console.log(`play scene:<${this.name}>`);
    for (let i = 0; i < 10; i++) {
      await sleep(100);
      const prev = this.values.getValues().value;
      this.values.setValues({ value: prev + 1 });
    }
  }
}

Scene.registeredSceneClasses['DemoScene'] = DemoScene;
Scene.registeredSceneClasses['DemoSceneNested'] = DemoSceneNested;
