function isIteration(obj) {
  let objType = Object.prototype.toString.call(obj);
  return objType == '[object Object]' || objType == '[object Array]'
}

function deepCopy(obj) {
  if (!isIteration(obj)) {
    throw new Error('error arguments');
  }
  // const targetObj = obj.constructor === Array ? [] : {};
  const targetObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    //只对对象自有属性进行拷贝
    if (obj.hasOwnProperty(key)) {
      if (isIteration(obj[key])) {
        targetObj[key] = deepCopy(obj[key]);
      } else {
        targetObj[key] = obj[key];
      }
    }
  }
  return targetObj;
}


// 获取数组的并集

function unionArray() {
  let resArr = [];

  Array.prototype.map.call(arguments, (value, index) => {
    value.map((valueArr, indexArr) => {
      if (!resArr.includes(valueArr)) {
        resArr.push(valueArr);
      }
    })
  });
  return resArr;
}

// let deepDiffResult = true;

// function deepDiff(obj, targetObj) {
//   deepDiffResult=true;
//   deepDiffIteration(obj, targetObj);
//   return deepDiffResult;
// }

const deepDiff = (function(){
  let deepDiffResult=null;

  function deepDiffIteration(obj, targetObj) {
    if (!isIteration(obj)) {
      throw new Error('error arguments');
    }
    console.log('uninkey开始');
    console.log(Object.keys(obj), Object.keys(targetObj));
    let keys = unionArray(Object.keys(obj), Object.keys(targetObj));
    console.log('uninkey结束');
    for (let key of keys) {

      if (obj.hasOwnProperty(key) && targetObj.hasOwnProperty(key)) {
        if (isIteration(obj[key])) {
          deepDiffIteration(obj[key], targetObj[key]);
        } else {
          if (targetObj[key] !== obj[key]) {
            deepDiffResult = false;
            return;
          }
        }
      } else {
        deepDiffResult = false;
        return;
      }
    }
  }

  return function(){
    deepDiffResult = true;
    deepDiffIteration(obj, targetObj);
    return deepDiffResult;
  }
})()


// console.log(unionArray([1, 2], [3, 2]));
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
export default {
  deepCopy,
  deepDiff
}