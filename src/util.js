
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

// 节流函数
const throttle = function (fn, interval) {
  const handler = fn;
  let timer;
  let firstTime = true;
  return function () {
    const args = arguments;
    const innerThis = this;
    if (firstTime) {
      handler.apply(innerThis, args);
      firstTime = false;
      return;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      handler.apply(innerThis, args);
    }, interval || 500);
  };
};


export default {
  unionArray,
  throttle
}