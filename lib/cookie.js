
export default {
    get:function(name) {
        var strcookie = document.cookie;//获取cookie字符串
        var arrcookie = strcookie.split("; ");//分割
        //遍历匹配
        for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
            if (arr[0] == name){
            return arr[1];
            }
        }
        return "";
         
    },
    set:function (name,value,expiredays){
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
        +';path=/';
    }



}