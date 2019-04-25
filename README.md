# 工具库

## 使用步骤

项目环境安装nrm  

```sh
npm install -g nrm    
```

引入

```javascript
// 全部引入
import * as utilities ;
// 或者
// 按需引入
import {utiDate} ;
```

## 方法

### utiDate :时间转换

将时间转换为xxxx-xx-xx xx:xx:xx  
date:[Date]，毫秒[Number],毫秒[String]

* .toTime(date)
* .toDateTime(date)
* .toDate(date)



### cookie 

* .get(name)
* .set({key, value, end, path, domain, secure})

### dataFormat: 数据格式化处理

* .deleteEmpty(obj) 删除空元素

### download 下载

### validator 校验相关
```javascript
使用：实例化：

let validator=new validatorOrigin({
  patterns:{
    'mobile':{
      'pattern': /^1\d{10}$/,
      'errorMessage': '请输入正确的手机号码'
    },
  },
  errorHandler:({desc})=>{
    Vue.prototype.$Notice.warning({
      title:'输入错误',
      //msg取传入，没有取默认
      desc
    })
  }
});


//调用

validator.validate({isEmpty:true,params:[]})
  .then((valid)=>{
    if(valid){

      
      
    }
  })
```

* .getPattern({
      type:''
   })  
返回格式，如:
{
  'pattern':/^\d{6,12}$/,
  'errorMessage': '请输入正确的qq'
}
* .validate(props)
props:Array [{type,value,msg}]
返回:promise

```javascript
regs = {
  'mobile':{
    'reg': /^1[3|4|5|7|8][0-9]\d{8}$/,
    'errorMessage': '请输入正确的手机号码'
  },
  'invite_code':{
    'reg': /^1[3|4|5|7|8][0-9]\d{8}$/,
    'errorMessage': '请输入正确邀请码'
  }
}  
```

* type类型
qq
mobile
invite_code
name
cnid
plateNumber 车牌号
noBlank 匹配一个非空白符
password 8位数字加字母的组合


### copy

.deepCopy 深拷贝



## 开发步骤

npm install

需要更新对应方法库，在src目录下对应方法文件编写即可  
新增方法，在根目录index.js导出加入

### 测试：

安装mocha chai
在test目录写对应js的测试文件  
mocha执行测试  
mocha
chai

### 发布

执行yarn build
修改package.json版本  
npm login  marjoven  *****  
npm publish