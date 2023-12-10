/** 等待时间
 *
 * @param {number} ms - 等待时间(单位毫秒)
 */
export async function sleep(ms: number) {
  await new Promise<void>((rsv) => {
    window.setTimeout(() => {
      rsv();
    }, ms);
  });
}

/**
 * 生成唯一ID
 */
export function genUUID(): string {
  // TODO 先简单写个临时算法
  return `${new Date().valueOf()}-${Math.random()}`;
}
