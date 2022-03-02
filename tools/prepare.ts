/* eslint-disable no-underscore-dangle */
const path = require("path");
const colors = require("colors");

const { spawnSync } = require("child_process");
const { dirExists, printError, printMessage } = require("./utils");

/** @type {*} */
const rootPath: string = path.resolve(__dirname, "..");

/** @type {*} */
const messages: Record<string, string> = {
  "git:init": colors.green("Creating .git config"),
  "husky:install": colors.green("Install Husky Hooks"),
};

/**
 *
 *
 * @return {*}  {*}
 */
const _initGitDir: Function = async (): Promise<void> => {
  try {
    const { stdout } = await spawnSync("git", ["init", rootPath]);
    printMessage(stdout);
  } catch (e) {
    printError(e);
  }
};

/**
 *
 *
 * @return {*}  {*}
 */
const _instalHuskyHooks: Function = async (): Promise<void> => {
  try {
    const { stdout } = await spawnSync("husky", ["install"]);
    printMessage(stdout);
  } catch (e) {
    printError(e);
  }
};

/**
 * Execute commands
 *
 * @return {*}  {void}
 */
const _setup: Function = async (): Promise<void> => {
  if (!(await dirExists(`${rootPath}/.git`))) {
    printMessage(messages["git:init"]);
    await _initGitDir();
  }

  printMessage(messages["husky:install"]);
  await _instalHuskyHooks();
};

_setup();
