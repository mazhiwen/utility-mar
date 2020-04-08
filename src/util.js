
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

export default {
  unionArray
}