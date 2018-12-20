

// import Vue from 'vue';
//需要写一个可配置的单例 

// const phone = /^(0?1[34587]\d{9})$|^((0(10|2[0-3]|[3-9]\d{2}))?-?[1-9]\d{6,7})$|^[4|8]00-?\d{3}-?\d{4}$/;
// const cnid = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}x)$)$/i;

function validator(paramsOrigin){
  /*
  params:{
    patterns:{
      'qq':{
        'pattern':/^\d{6,12}$/,
        'errorMessage': '请输入正确的qq'
      },
    },
    errorHandler:()=>{

    }
  }
  */
  var params={
    ...paramsOrigin
  };
  this.patterns = {
    
    'qq':{
      'pattern':/^\d{6,12}$/,
      'errorMessage': '请输入正确的qq'
    },
    'mobile':{
      'pattern': /^1[3|4|5|7|8|9][0-9]\d{8}$/,
      'errorMessage': '请输入正确的手机号码'
    },
    'invite_code':{
      'pattern': /^1[3|4|5|7|8][0-9]\d{8}$/,
      'errorMessage': '请输入正确邀请码'
    },
    'otp6':{
      'pattern': /^\d{6}$/,
      'errorMessage': '错误的验证码'
    },
    'knowLengthOtp':{
      'pattern': /^\S+$/,
      'errorMessage': '错误的验证码'
    },
    'name':{
      'pattern': /^[\u4e00-\u9fa5]([\u4e00-\u9fa5]{0,24}\u00b7{0,1}[\u4e00-\u9fa5]{1,24})+$/,
      'errorMessage': '请输入正确的姓名'
    },
    'cnid':{
      'pattern': /^(\d|x|X){18}$/,
      'errorMessage': '请输入正确的身份证号码'
    },
    'bankcardNo':{
      'pattern': /^\d+$/,
      'errorMessage': '请输入正确的银行卡号'
    },
    'captcha':{
      'pattern': /^\S+$/,
      'errorMessage': '请输入验证码'
    },
    'degree':{
      'pattern': /^\S+$/,
      'errorMessage': '请选择学历'
    },
    'liaison1':{
      'pattern': /^\S+$/,
      'errorMessage': '请输入联系人1电话'
    },
    'base64Str':{
      'pattern': /^\S+$/,
      'errorMessage': '请上传图片'
    },
    'plateNumber':{
      'pattern': /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
      'errorMessage': '请正确输入车牌号'
    },
    //匹配一个非空白符
    'noBlank':{
      'pattern': /^\S+$/,
      'errorMessage': ''
    },
    'password':{
      'pattern':/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/,
      'errorMessage':'密码应为8位数字加字母的组合'
    },
    ...params.patterns
  };
  this.errorHandler=params.errorHandler;
}


validator.prototype. validate = function(params){
  /*
  params :Array [{type,value,msg}]
  */
  return new Promise((resolve, reject)=>{
    var result=true;
    for (var {type,value,msg} of params){
      var pattern = this.patterns[type];
      // var pattern = global.validaterRegs[type] || patterns[type];
      if (pattern) {
        result = null != value && value!==''  && pattern['pattern'].test(value);
        if(!result){
          // Vue.prototype.$Notice.warning({
          //   title:'输入错误',
          //   desc:msg||this.patterns[type]['errorMessage']
          // })
          this.errorHandler();
          resolve(result);
          return;
        }
      }
    }
    resolve(result);
  })
}


validator.prototype. getPattern = function(params){
  /**
   * params:
   * {
   *    type:''
   * }
   */
  if(params&&params.type){
    return this.patterns[params.type];
  }
  

}

export default validator
