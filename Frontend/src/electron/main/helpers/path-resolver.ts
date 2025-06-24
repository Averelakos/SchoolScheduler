import { app } from "electron";
import path from "path";
import { isDev } from "./utils.js";

/**
 * Checks the enviroment and return the correct
 * path for the preload file
 * @returns string
 */
export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    '/dist-electron/preload.cjs'
  );
}


/**
 * Gets the path for the angular index html
 * file
 * @returns string
 */
export function getUIPath() {
  // return path.join(app.getAppPath(), `/dist-angular/browser/index.html`);
  return path.join(app.getAppPath(), '/dist-angular/browser/index.html')
}

export function getAssetPath() {
  return path.join(app.getAppPath(), isDev() ? '.' : '..', '/src/assets');
}