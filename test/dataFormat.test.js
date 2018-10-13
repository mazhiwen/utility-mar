var expect = require('chai').expect;
import dataFormat from '../src/dataFormat.js';
let c;
let a={
  a:'',
  b:' ',
  c,
  d:3,
  d1:0,
  d2:'0',
  d3:NaN,
  bo:true,
  b2:false,
  b3:'true',
  e:'s',
  f:function(){},
  g:{},
  g1:{a:3},
  h:[],
  h1:[2],
  nu:null
}
dataFormat.deleteEmpty(a);
console.log(Object. prototype. toString. call( a ) == "[object Object]");
console.log(a.length);


// describe('utility:时间转换', function() {
  
//   it('毫秒转换为datetime', function() {   
//     expect(dataFormat.deleteEmpty({
//       a:'',
//       b:2
//     })).to.be.equal({b:2});
//   });





// })