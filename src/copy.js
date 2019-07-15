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

function deepDiff(obj, targetObj) {
  if (!isIteration(obj)) {
    throw new Error('error arguments');
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && targetObj.hasOwnProperty(key)) {
      if (isIteration(obj[key])) {
        return deepDiff(obj[key], targetObj[key]);
      } else {
        if (targetObj[key] !== obj[key]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}

export default {
  deepCopy,
  deepDiff
}