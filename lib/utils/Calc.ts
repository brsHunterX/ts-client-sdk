/**
 * Class that facilitates complex calculations or not :P
 *
 * @export
 * @class Calc
 */
export default class Calc {
  /**
   * Add two numbers
   *
   * @static
   * @param {number} a
   * @param {number} b
   * @return {*}  {number}
   * @memberof Calc
   */
  public static add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtract two numbers
   *
   * @static
   * @param {number} a
   * @param {number} b
   * @return {*}  {number}
   * @memberof Calc
   */
  public static sub(a: number, b: number): number {
    return a - b;
  }
}
