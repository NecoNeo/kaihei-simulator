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
