"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;// 获取数组的并集
function unionArray(){var a=[];return Array.prototype.map.call(arguments,function(b){b.map(function(b){a.includes(b)||a.push(b)})}),a}// 节流函数
var throttle=function(a,b){var c,d=a,e=!0;return function(){var a=arguments,f=this;return e?(d.apply(f,a),void(e=!1)):!c&&void(c=setTimeout(function(){clearTimeout(c),c=null,d.apply(f,a)},b||500))}},_default={unionArray:unionArray,throttle:throttle};exports["default"]=_default;