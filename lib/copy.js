'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function isIteration(a){var b=Object.prototype.toString.call(a);return'[object Object]'==b||'[object Array]'==b}function deepCopy(a){if(!isIteration(a))throw new Error('error arguments');// const targetObj = obj.constructor === Array ? [] : {};
var b=Array.isArray(a)?[]:{};for(var c in a)//只对对象自有属性进行拷贝
a.hasOwnProperty(c)&&(b[c]=isIteration(a[c])?deepCopy(a[c]):a[c]);return b}function deepDiff(a,b){if(!isIteration(a))throw new Error('error arguments');// const targetObj = obj.constructor === Array ? [] : {};
// const targetObj = Array.isArray(obj) ? [] : {};
for(var c in a)//只对对象自有属性进行拷贝
a.hasOwnProperty(c)&&(b[c]=isIteration(a[c])?deepCopy(a[c]):a[c]);return b}exports.default={deepCopy:deepCopy,deepDiff:deepDiff};