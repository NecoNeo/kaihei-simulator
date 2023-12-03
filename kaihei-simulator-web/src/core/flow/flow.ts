import { type Subject, BehaviorSubject } from 'rxjs';
import { sleep } from '../../utils/common';

/** 执行场景节点定义 */
interface SceneNode {
  name: string;
}

const mockSceneNodeTree: SceneNode[] = [];

/**
 * 时间流执行控制定义
 * - 模拟事件流执行过程
 * - 玩家交互行为与事件流的携程控制
 */
export class FlowExecutor {
  changeEvt: Subject<string> | null = new BehaviorSubject<string>('');

  constructor() {}

  private destruct() {
    // TODO
    this.changeEvt?.complete();
    this.changeEvt = null;
  }

  async start() {
    const changeEvt = this.changeEvt;
    if (!changeEvt) return;
    changeEvt.next('开始事件流');
    await sleep(1000);

    const sceneNodeRef = mockSceneNodeTree[0];

    while (sceneNodeRef) {
      console.log(sceneNodeRef);
    }

    await sleep(1000);
    changeEvt.next('测试终止');
  }
}
