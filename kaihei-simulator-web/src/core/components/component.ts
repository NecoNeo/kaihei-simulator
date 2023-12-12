import { BehaviorSubject, type Subscription } from 'rxjs';

/**
 * 数据组成的最小单元
 * - 唯一数据来源存储
 * - UI交互订阅实现
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Component<T extends Record<string, any> = Record<string, any>> {
  private v: BehaviorSubject<T>;

  constructor(initialValues: T) {
    this.v = new BehaviorSubject(initialValues);
  }

  /** 订阅数据变更 (with subscr wrapper) */
  subscribe(ob: (values: T) => void): Subscription {
    return this.v.subscribe(ob);
  }

  /** 获取 current pure values */
  getValues(): T {
    return this.v.value; // 暂不考虑解构
  }
  setValues(values: T): void {
    this.v.next(values);
  }
}
