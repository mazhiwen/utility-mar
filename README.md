# 工具库

## 使用步骤

项目环境安装nrm  

```sh
npm install -g nrm   
# 切换nrm为我来贷npm 
nrm add wldnpm http://npm.wolaidai.com:8080/  
nrm use wldnpm
```

引入

```javascript
// 全部引入
import * as utilities from 'welab-utilities';
// 或者
// 按需引入
import {utiDate} from 'welab-utilities';
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

- 当前版本,需要Vue环境 

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


## 开发步骤

npm install

需要更新对应方法库，在lib目录下对应方法文件编写即可  
新增方法，在根目录index.js导出加入

### 测试：

安装mocha chai
在test目录写对应js的测试文件  
mocha执行测试  
mocha
chai

### 发布

测试 :integration分支
1. 修改package.json verson

2. git打tag 

如：

```sh
yarn bulild
git add .&&
git commit -m "readme"&&
git tag -a v1.0.9 -m "readme"&&
git push origin v1.0.9

```
发布环境需要执行yarn bulild
正式:production分支 提工单运维更新