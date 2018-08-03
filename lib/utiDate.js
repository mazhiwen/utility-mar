function toTwoDigit(n){
  
  if(n<10){
    return '0'+n;
  }else{
    return n;
  }

}
function paramToDate(param){
  if( param instanceof Date){
    return param
  }else if(typeof(param)=='number'||(typeof(param)=='string'&&param.length>0)){
    return new Date(parseInt(param))
  }else{
    
    return false;
  }
}

export default {
  toTime: function (millisecond) {
    var timeObj =paramToDate(millisecond);
    if(timeObj){
      return toTwoDigit(timeObj.getHours())+':'+toTwoDigit(timeObj.getMinutes())+':'+toTwoDigit(timeObj.getSeconds());
    }
  },
  toDateTime: function (millisecond) {
    var timeObj =paramToDate(millisecond);
    if(timeObj){
      return timeObj.getFullYear()+'-'+toTwoDigit(timeObj.getMonth()+1)+'-'+toTwoDigit(timeObj.getDate())+' '+toTwoDigit(timeObj.getHours())+':'+toTwoDigit(timeObj.getMinutes())+':'+toTwoDigit(timeObj.getSeconds());
    }
  },
  toDate: function (millisecond) {
    var timeObj =paramToDate(millisecond);
    if(timeObj){
      return timeObj.getFullYear()+'-'+toTwoDigit(timeObj.getMonth()+1)+'-'+toTwoDigit(timeObj.getDate());
    }else{
      return '';
    }
  }
}



