'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function isIteration(a){var b=Object.prototype.toString.call(a);return'[object Object]'==b||'[object Array]'==b}function deepCopy(a){if(!isIteration(a))throw new Error('error arguments');// const targetObj = obj.constructor === Array ? [] : {};
var b=Array.isArray(a)?[]:{};for(var c in a)//只对对象自有属性进行拷贝
a.hasOwnProperty(c)&&(b[c]=isIteration(a[c])?deepCopy(a[c]):a[c]);return b}// 获取数组的并集
function unionArray(){var a=[];return Array.prototype.map.call(arguments,function(b){b.map(function(b){a.includes(b)||a.push(b)})}),a}// let deepDiffResult = true;
// function deepDiff(obj, targetObj) {
//   deepDiffResult=true;
//   deepDiffIteration(obj, targetObj);
//   return deepDiffResult;
// }
var deepDiff=function(){function a(c,d){if(!isIteration(c))throw new Error('error arguments');console.log('uninkey\u5F00\u59CB'),console.log(Object.keys(c),Object.keys(d));var e=unionArray(Object.keys(c),Object.keys(d));console.log('uninkey\u7ED3\u675F');var f=!0,g=!1,h=void 0;try{for(var i,j,k=e[Symbol.iterator]();!(f=(i=k.next()).done);f=!0){if(j=i.value,!(c.hasOwnProperty(j)&&d.hasOwnProperty(j)))return void(b=!1);if(isIteration(c[j]))a(c[j],d[j]);else if(d[j]!==c[j])return void(b=!1)}}catch(a){g=!0,h=a}finally{try{!f&&k.return&&k.return()}finally{if(g)throw h}}}var b=null;return function(c,d){return b=!0,a(c,d),b}}();// console.log(unionArray([1, 2], [3, 2]));
// console.log(deepDiff(
//   [{
//     dimData: {
//       column: [1],
//       row: [3, 2]
//     }
//   }, {
//     dimData: {
//       column: [1],
//       row: [3, 4]
//     }
//   }],
//   [{
//     dimData: {
//       column: [1],
//       row: [3, 2, 5]
//     }
//   }, {
//     dimData: {
//       column: [1],
//       row: [3, 4]
//     }
//   }]
// ));
exports.default={deepCopy:deepCopy,deepDiff:deepDiff};