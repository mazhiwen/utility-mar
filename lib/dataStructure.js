"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}//节点
function Node(a,b,c){this.data=a,this.left=b,this.right=c,this.show=show}function show(){return this.data}function inOrder(a){null==a||(inOrder(a.left),console.log(a.show()+" "),inOrder(a.right))}//二叉树
function BST(){//初始根节点为null
this.root=null,this.insert=insert,this.inOrder=inOrder}//插入节点
function insert(a){var b=new Node(a,null,null);//如果是第一个节点
if(null==this.root)this.root=b;else//当前节点设置为根节点  
for(var c,d=this.root;;)//如果插入值 < 当前节点
if(c=d,a<d.data){//如果当前节点左节点为空 进行赋值操作
if(d=d.left,null==d){c.left=b;break}//左节点不为空 ,continue循环
}else//如果当前节点右节点为空 进行赋值操作
if(d=d.right,null==d){c.right=b;break}//右节点不为空 ,continue循环
}//实践
// var bst = new BST();
// bst.insert(23);
// bst.insert(45);
// bst.insert(16);
// bst.insert(37);
// bst.insert(3);
// bst.insert(99);
// bst.insert(22);
// bst.inOrder(bst.root);
// 树
var Tree=function(){function a(a){return d[a]}function b(a){var b=a.data,c=a.parent,d=a.childrens;this.data=b,this.parent=c,this.childrens=d}// 此处node私有变量方法需要优化
// 获取父节点
// 初始化tree，传入数据
function c(a){this.setNode({index:e,data:null,childrensData:a,parent:null}),console.log(d)}var d=[],e=0,f=[];return b.prototype.getParent=function(){return a(this.parent)},b.prototype.getchildrens=function(){var b=[];return this.childrens.map(function(c){b.push(a(c))}),b},b.prototype.getData=function(){return this.data},c.prototype.getTreeData=function(){return f},c.prototype.getNode=a,c.prototype.setNode=function(a){var c=this,f=a.index,g=a.data,h=a.childrensData,i=a.parent,j=[];h&&h.map(function(a){var b=a.children,d=_objectWithoutProperties(a,["children"]),g=++e;a.index=g,j.push(g),c.setNode({index:g,data:d,childrensData:b,parent:f})}),d[f]=new b({data:g,parent:i,childrens:j})},c}(),swap=function(a,b,c){var d=a[b];a[b]=a[c],a[c]=d},bubbleSort=function(a){// if (valuePath) 
// 数据总长度
for(var b=a.length,c=b;2<=c;--c)//numElements 至 2 ，总numElements-1次
// console.log('outer' + outer);
for(var d=0;d<=c-2;++d)// console.log('inner' + inner);
a[d].value>a[d+1].value&&swap(a,d,d+1);// console.log(data);
},_default={Tree:Tree,sort:{bubbleSort:bubbleSort}};// let data = [{
//   label: 'aa',
//   children: [{
//       label: 'bb'
//     },
//     {
//       label: 'cc'
//     }
//   ]
// }, {
//   label: '2'
// }];
// let treeInstance = new Tree(data);
// console.log("输入原始data");
// console.log(data);
// console.log(treeInstance.getNode(1).getParent().getData());
// console.log("输出treedata");
// console.log(treeInstance.getTreeData());
/*******************  排序  *************/exports["default"]=_default;