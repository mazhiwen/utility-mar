# 工具库 utility-mar

常见的一些工具类方法

## 目录

- [安装](#安装)
- [API](#API)
  - [.utiDate](#.utiDate)
  - [.cookie](#.cookie)
  - [.dataFormat](#.dataFormat)
  - [.download](#.download)
  - [.validator](#.validator)
  - [.copy](#.copy)
  - [.dataStructure](#.dataStructure)
  - [.color](#.color)
  - [.util](#.util)
- [开发步骤](#开发步骤)

## 安装

```javascript
// 全部引入
import * as utility from utility-mar;
// 或者
// 按需引入
import {utiDate} from utility-mar;
```

## API

utility.method调用对应的API库

method为以下API方法

### .utiDate

将时间转换为xxxx-xx-xx xx:xx:xx  

* utility.utiDate.toTime(date)
* utility.utiDate.toDateTime(date)
* utility.utiDate.toDate(date)

date参数:[Date] | 毫秒[Number] | 毫秒[String]

### .cookie

* .get(name)
* .set({key, value, end, path, domain, secure})

### .dataFormat

数据格式化处理

* .deleteEmpty(obj) 删除空元素

### .download

 下载

### .validator

校验相关

#### 示例

```javascript
import { validator as validatorOrigin } from utility-mar;
// 使用：实例化一个validator
const validator=new validatorOrigin({
  // 自定义的校验type ， reg规则 ，错误信息
  patterns:{
    'mobile':{
      'pattern': /^1\d{10}$/,
      'errorMessage': '请输入正确的手机号码'
    },
  },
  // 自定义错误回调方法
  errorHandler:({desc})=>{
    Vue.prototype.$Notice.warning({
      title:'输入错误',
      //msg取传入，没有取默认
      desc
    })
  }
});

//调用
validator.validate({isEmpty:true,params:[
  {
    type:"mobile",
    errorMessage:"..."
  }
]})
  .then((valid)=>{
    if(valid){
      // valid是校验结果
    }
  })
```

#### validator实例 API  

* .getPattern({
      type:'mobile'
   })

返回:type对应的pattern对象

```js
// 返回
{
  'pattern':/^\d{6,12}$/,//正则表达式
  'errorMessage': '请输入正确的qq'//错误message信息
}
```

* .validate([{type,value,msg}])

执行校验方法

返回:promise

#### 默认支持的type类型

qq

mobile

name

cnid

plateNumber 车牌号

noBlank 匹配一个非空白符

password 8位数字加字母的组合

### .copy

1. .deepCopy 深拷贝

2. .deepDiff(parama, paramb) 比较

如果相同，返回true。否则返回false

### .dataStructure

- .Tree
<!-- 树结构数据结构 -->

```js
import { dataStructure } from "utility-mar"
let data = [{
  label: 'aa',
  children: [{
      label: 'bb'
    },
    {
      label: 'cc'
    }
  ]
}, {
  label: '2'
}];
let treeInstance = new dataStructure.Tree(data);
console.log("输入原始data");
console.log(data);
console.log(treeInstance.getNode(1).getParent().getData());
```

### .color

- .getGradientColorsByValues

- .getLightDarkColor

- .getGradientColorsByNum

### .util

- .unionArray  合并两个数组，并集

## 开发步骤

npm install

需要更新对应方法库，在src目录下对应方法文件编写即可  
新增方法，在根目录index.js导出加入

### 测试

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
