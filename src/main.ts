/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-06-30 10:36:23
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-14 10:47:03
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import {ShadowElement} from "../src/app/my-shadow-dom"
// customElements.define("myShadowEle",ShadowElement)
if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });
