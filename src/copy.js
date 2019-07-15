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


let deepDiffResult = true;

function deepDiffIteration(obj, targetObj) {
  if (!isIteration(obj)) {
    throw new Error('error arguments');
  }

  for (let key in obj) {
    console.log(obj);
    console.log(key);
    if (obj.hasOwnProperty(key) && targetObj.hasOwnProperty(key)) {
      if (isIteration(obj[key])) {
        deepDiff(obj[key], targetObj[key]);
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
  // return true;
}


function deepDiff(obj, targetObj) {

  deepDiffIteration(obj, targetObj);
  return deepDiffResult;
}



export default {
  deepCopy,
  deepDiff
}