'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function isIteration(a){var b=Object.prototype.toString.call(a);return'[object Object]'==b||'[object Array]'==b}function deepCopy(a){if(!isIteration(a))throw new Error('error arguments');// const targetObj = obj.constructor === Array ? [] : {};
var b=Array.isArray(a)?[]:{};for(var c in a)//只对对象自有属性进行拷贝
a.hasOwnProperty(c)&&(b[c]=isIteration(a[c])?deepCopy(a[c]):a[c]);return b}// 获取数组的并集
function unionArray(){var a=[];return Array.prototype.map.call(arguments,function(b){b.map(function(b){a.includes(b)||a.push(b)})}),a}var deepDiffResult=!0;function deepDiffIteration(a,b){if(!isIteration(a))throw new Error('error arguments');console.log('uninkey\u5F00\u59CB'),console.log(Object.keys(a),Object.keys(b));var c=unionArray(Object.keys(a),Object.keys(b));console.log('uninkey\u7ED3\u675F');var d=!0,e=!1,f=void 0;try{for(var g,h,i=c[Symbol.iterator]();!(d=(g=i.next()).done);d=!0){if(h=g.value,!(a.hasOwnProperty(h)&&b.hasOwnProperty(h)))return void(deepDiffResult=!1);if(isIteration(a[h]))deepDiffIteration(a[h],b[h]);else if(b[h]!==a[h])return void(deepDiffResult=!1)}}catch(a){e=!0,f=a}finally{try{!d&&i.return&&i.return()}finally{if(e)throw f}}}function deepDiff(a,b){return deepDiffIteration(a,b),deepDiffResult}// console.log(unionArray([1, 2], [3, 2]));
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