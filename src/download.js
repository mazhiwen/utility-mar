

export default {

  downLoadWithParams:function (params, url) {

    var temp = document.createElement('form');
    temp.action = url;
    temp.method = 'post';
    for(var key in params) {
      var input = document.createElement('input');
      input.setAttribute('name',key);
      input.setAttribute('value',params[key]);
      temp.appendChild(input);
    }
    document.body.appendChild(temp);
    temp.style.display = 'none';
    temp.submit();
  }


}