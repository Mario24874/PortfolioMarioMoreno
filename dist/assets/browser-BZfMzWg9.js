import{g as e}from"./index-DFieQvSu.js";function t(e,t){for(var r=0;r<t.length;r++){const o=t[r];if("string"!=typeof o&&!Array.isArray(o))for(const t in o)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(o,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>o[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")};const o=t({__proto__:null,default:e(r)},[r]);export{o as b};