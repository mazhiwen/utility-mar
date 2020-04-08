// // var utils = require('../lib/utility.js');
// var expect = require('chai').expect;
// // var dataFormat = require('../lib/dataFormat.js');
// import dataFormat from '../lib/dataFormat';
// // describe('utility:时间转换', function() {
// //   it('毫秒转换为datetime', function() {   
// //     expect(utils.toDateTime(1531378843006)).to.be.equal('2018-07-12 15:00:43');
// //   });

// //   it('毫秒转换为date', function() {
// //     expect(utils.toDate(1531378843006)).to.be.equal('2018-07-12');
// //   });



// // })
// describe('utility:时间转换', function() {
//   it('毫秒转换为datetime', function() {
//     let value={
//       'b':undefined,
//       'a':'2'
//     };
//     dataFormat.deleteEmpty(value); 
    
//     expect(value.hasOwnProperty('b')).to.be.equal(false);
//   });

// })



// import copy from '../lib/copy';
// console.log(copy.deepCopy({
//   a:{
//     aa:213,
//     ddd:22222
//   }
// }));
// console.log(copy.deepDiff(
//   [
//     {
//       dimData:{
//         page:{},
//         row:{
//           '1_2':{
//             id:"222aa",
//             member:[
//               {dimNo:"dddd2d"}
//             ]
//           }
//         }
//       },
//       name:2
//     },
//   ],
//   [
//     {
//       dimData: {
//         page: {},
//         row: {
//           '1_2': {
//             id: "222aas",
//             member: [{
//               dimNo: "dddd2d"
//             }]
//           }
//         }
//       },
//       name: 2
//     }
//   ]

// ));



import util from '../lib/util';
console.log(util.unionArray([1,2],[2,333,4,1]));