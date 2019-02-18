


//会改变原数据，并返回
function deleteEmpty(obj){
  for ( let key in obj){
    let value=obj[key];
    if(value==undefined||value==null){
      delete obj[key];
    }
    if(typeof(value)=='string'&&value.toString().trim()==''){
      delete obj[key];
    }
    if(typeof(value)=='number'&&isNaN(value)){
      delete obj[key];
    }
    
    if((Object. prototype. toString. call( value ) == "[object Array]")&&value.length==0){
      delete obj[key];
    }
    //需要添加判断空对象
  }
  return obj;
}


export default  {
  deleteEmpty


}
