
export default  {
  deleteEmpty:function(obj){
    for ( var key in obj){
      if((obj[key].toString().trim())==''){
        delete obj[key];
      }
    }
    
    
  }


}
