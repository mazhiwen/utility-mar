
export default {
    get:function(name) {
      return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;    
    },
    set: function ({key, value, end, path, domain, secure}) {
      
      if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) { return false; }
      var sExpires = '';
      if (end) {
        switch (end.constructor) {
          case Number:
            sExpires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + end;
            break;
          case String:
            sExpires = '; expires=' + end;
            break;
          case Date:
            sExpires = '; expires=' + end.toUTCString();
            break;
        }
      }
      let cookieContent=encodeURIComponent(key) + '=' + encodeURIComponent(value) + sExpires + (domain ? '; domain=' + domain : '') + (path ? '; path=' + path : '') + (secure ? '; secure' : '');
      document.cookie = cookieContent;
      return true;
    },
  
  
  
  }