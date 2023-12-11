import { genUUID } from '../../utils/common';

/**
 * Scene基础设计 // TODO 草稿待迭代
 */
export class Scene {
  static registeredSceneClasses: { [key: string]: { new (): Scene } } = {};

  id: string;
  name: string;
  children: Scene[] = [];

  constructor() {
    this.id = genUUID();
    this.name = 'Scene';
  }

  async play() {}

  createChildScene(name: string) {
    console.log(`startChildScene: ${name}`);
    const s = new Scene.registeredSceneClasses[name](); // TODO null value checking
    this.children.push(s);
    return s;
  }
}
