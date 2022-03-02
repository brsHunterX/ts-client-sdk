/**
 * Class that facilitates the treatment of complex texts or not :P
 *
 * @export
 * @class Text
 */
export default class Text {
  /**
   * Convert text to Lower Case
   *
   * @static
   * @param {string} text
   * @return {*}  {string}
   * @memberof Text
   */
  public static toLowerCase(text: string): string {
    return text.toLowerCase();
  }

  /**
   * Convert text to Lower Case
   *
   * @static
   * @param {string} text
   * @return {*}  {string}
   * @memberof Text
   */
  public static toUpperCase(text: string): string {
    return text.toUpperCase();
  }
}
