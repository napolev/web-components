// MyDomainCom: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './my-domain-com.core.js';
import {
  MyComponent
} from './my-domain-com.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent
  ], opts);
}