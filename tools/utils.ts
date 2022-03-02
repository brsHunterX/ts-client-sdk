const { constants } = require("fs");
const { access } = require("fs/promises");

/**
 *
 *
 * @return {*}  {Promise<void>}
 */
exports.dirExists = async (path: string): Promise<boolean> => {
  try {
    await access(path, constants.R_OK || constants.W_OK);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 *
 *
 * @param {string} text
 */
exports.printError = (text: string, bLine: boolean = true): void => {
  if (bLine) {
    console.error(`\n${text}`);
  } else {
    console.error(text);
  }
};

/**
 *
 *
 * @param {string} text
 */
exports.printMessage = (text: string, bLine: boolean = true): void => {
  if (bLine) {
    console.log(`\n${text}`);
  } else {
    console.log(text);
  }
};
