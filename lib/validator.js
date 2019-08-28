'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});function getSingleValidateHandler(a){var b=a.isEmpty;return b?singleValidateEmptyHandler:singleValidateNoEmptyHandler}function singleValidateEmptyHandler(a,b){var c=!0;return b&&(c=b&&a.test(b)),c}function singleValidateNoEmptyHandler(a,b){var c=!0;return c=null!=b&&''!==b&&a.test(b),c}//需要写一个可配置的单例 
// const phone = /^(0?1[34587]\d{9})$|^((0(10|2[0-3]|[3-9]\d{2}))?-?[1-9]\d{6,7})$|^[4|8]00-?\d{3}-?\d{4}$/;
// const cnid = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}x)$)$/i;
// 传入初始化参数
function validator(a){// paramsOrigin: {
//   patterns:{
//     'qq':{
//       'pattern':/^\d{6,12}$/,
//       'errorMessage': '请输入正确的qq'
//     },
//   },
//  // 错误处理回调方法
//   errorHandler:()=>{
//   }
// }
var b=_extends({},a);this.patterns=_extends({qq:{pattern:/^\d{6,12}$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684qq'},mobile:{pattern:/^1[3|4|5|7|8|9][0-9]\d{8}$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801'},invite_code:{pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u9080\u8BF7\u7801'},otp6:{pattern:/^\d{6}$/,errorMessage:'\u9519\u8BEF\u7684\u9A8C\u8BC1\u7801'},knowLengthOtp:{pattern:/^\S+$/,errorMessage:'\u9519\u8BEF\u7684\u9A8C\u8BC1\u7801'},name:{pattern:/^[\u4e00-\u9fa5]([\u4e00-\u9fa5]{0,24}\u00b7{0,1}[\u4e00-\u9fa5]{1,24})+$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D'},cnid:{pattern:/^(\d|x|X){18}$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801'},bankcardNo:{pattern:/^\d+$/,errorMessage:'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94F6\u884C\u5361\u53F7'},captcha:{pattern:/^\S+$/,errorMessage:'\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801'},degree:{pattern:/^\S+$/,errorMessage:'\u8BF7\u9009\u62E9\u5B66\u5386'},base64Str:{pattern:/^\S+$/,errorMessage:'\u8BF7\u4E0A\u4F20\u56FE\u7247'},plateNumber:{pattern:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,errorMessage:'\u8BF7\u6B63\u786E\u8F93\u5165\u8F66\u724C\u53F7'},//匹配一个非空白符
noBlank:{pattern:/^\S+$/,errorMessage:''},password:{pattern:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/,errorMessage:'\u5BC6\u7801\u5E94\u4E3A8\u4F4D\u6570\u5B57\u52A0\u5B57\u6BCD\u7684\u7EC4\u5408'}},b.patterns),this.errorHandler=b.errorHandler}validator.prototype.validate=function(a){var b=this,c=a.params,d=a.isEmpty,e=getSingleValidateHandler({isEmpty:d});/*
  params :Array [{type,value,msg}]
  */return new Promise(function(a){var d=!0,f=!0,g=!1,h=void 0;try{for(var i,j=c[Symbol.iterator]();!(f=(i=j.next()).done);f=!0){var k=i.value,l=k.type,m=k.value,n=k.msg,o=k.isEmpty,p=b.patterns[l];// var pattern = global.validaterRegs[type] || patterns[type];
if(p&&('boolean'==typeof p.isEmpty&&(e=getSingleValidateHandler({isEmpty:p.isEmpty})),d=e(p.pattern,m),!d))return b.errorHandler({desc:n||b.patterns[l].errorMessage}),void a(d)}}catch(a){g=!0,h=a}finally{try{!f&&j.return&&j.return()}finally{if(g)throw h}}a(d)})},validator.prototype.getPattern=function(a){/**
   * params:
   * {
   *    type:''
   * }
   */if(a&&a.type)return this.patterns[a.type]},exports.default=validator;