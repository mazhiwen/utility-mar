'use strict';Object.defineProperty(exports,'__esModule',{value:!0});//会改变原数据，并返回
function deleteEmpty(a){for(var b in a){var c=a[b];(c==null||null==c)&&delete a[b],'string'==typeof c&&''==c.toString().trim()&&delete a[b],'number'==typeof c&&isNaN(c)&&delete a[b],'[object Array]'==Object.prototype.toString.call(c)&&0==c.length&&delete a[b]}return a}exports.default={deleteEmpty:deleteEmpty};