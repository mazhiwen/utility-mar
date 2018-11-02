# 工具库
这是马治文做的npm工具包

## 安装

引入

```javascript
// 全部引入
import * as utilities from 'utility-mar';
// 或者
// 按需引入
import {utiDate} from 'utility-mar';
```

## 方法

### utiDate :时间转换

将时间转换为xxxx-xx-xx xx:xx:xx  
* .toTime(props)
* .toDateTime(props)
* .toDate(props)

***参数***:props:[Date]，毫秒[Number],毫秒[String]  
***返回***:

### cookie 

* .get(name)
* .set({key, value, end, path, domain, secure})

### dataFormat: 数据格式化处理

* .deleteEmpty(obj) 删除空元素  
˚
***参数***:Object

### download 下载

### validator 校验相关

```javascript
new validator(configs)

//参数configs:
{
  patterns:{
    ...,
    'password':{
      'pattern':/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8}$/,
      'errorMessage':'密码应为8位数字加字母的组合'
    }
  },
  ...
}
//返回validator 对象
```



* .getPattern({
      type:''
   })  
***返回***:，如:
  ```javascript
  {
    'reg': /^1[3|4|5|7|8][0-9]\d{8}$/,
    'errorMessage': '请输入正确的手机号码'
  }
  ```

* .validate(props)  
***参数***:props:Array [{type,value,msg}]  
***返回***:promise
* .config
* type类型:  
qq  
mobile  
invite_code 
name  
cnid 
plateNumber 车牌号  
noBlank 匹配一个非空白符  
password 8位数字加字母的组合  

## 测试：

yarn test

单个文件:mocha test/dataFormat.test.js

安装mocha chai
在test目录写对应js的测试文件  
mocha执行测试  
mocha
chai

## 步骤

npm install -g mocha

npm install

## 发布

修改package.json版本  
npm login  marjoven  *****  
npm publish


