//节点
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}
//二叉树
function BST() {
  //初始根节点为null
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}
//插入节点
function insert(data) {
  var n = new Node(data, null, null);
  //如果是第一个节点
  if (this.root == null) {
    this.root = n;
  } else {
    //当前节点设置为根节点  
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      //如果插入值 < 当前节点
      if (data < current.data) {
        //当前节点设置为当前节点左节点
        current = current.left;
        //如果当前节点左节点为空 进行赋值操作
        if (current == null) {
          parent.left = n;
          break;
        }
        //左节点不为空 ,continue循环
      } else {
        //如果插入值 > 当前节点
        current = current.right;
        //如果当前节点右节点为空 进行赋值操作
        if (current == null) {
          parent.right = n;
          break;
        }
        //右节点不为空 ,continue循环
      }
    }
  }
}
//实践
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

let Tree = (function () {
  let dataList = [];
  let currentDataListIndex = 0;

  let treeData = [];


  function getNode(index) {
    return dataList[index];
  }


  function Node({
    data,
    parent,
    childrens
  }) {
    // data 和 parent 为null 的是根节点
    this.data = data;
    // 设置当前节点的parent 数据索引
    this.parent = parent;
    // 子节点的索引列表
    this.childrens = childrens;
  }

  // 此处node私有变量方法需要优化
  // 获取父节点
  Node.prototype.getParent = function () {
    return getNode(this.parent);
  }
  // 获取子节点
  Node.prototype.getchildrens = function () {
    let childrensNodeList = [];
    this.childrens.map((value, index) => {
      childrensNodeList.push(getNode(value));
    })
    return childrensNodeList;
  }
  // 获取所有子节点
  // Node.prototype.getAllChildrens = function () {
  //   let childrensNodeList = [];
  //   this.childrens.map((value, index) => {
  //     childrensNodeList.push(getNode(value));
  //   })
  //   return childrensNodeList;
  // }
  // 获取当前节点数据
  Node.prototype.getData = function () {
    return this.data;
  };


  // 初始化tree，传入数据
  function Tree(data) {
    let currentIndex = 0;
    // 从根节点开始设置
    // 根节点data设为null
    this.setNode({
      index: currentDataListIndex,
      data: null,
      childrensData: data,
      parent: null,
    });
    console.log(dataList);

  }
  Tree.prototype.getTreeData = function () {
    return treeData;
  };
  Tree.prototype.getNode = getNode;
  // 需要一个设置节点的方法 传入index,data,children
  Tree.prototype.setNode = function ({
    index,
    data,
    childrensData,
    parent
  }) {
    // 生成当前节点的 子节点list字段
    let childrensIndexList = [];
    // 处理子节点
    let childrenDataWithIndex = [];
    
    childrensData && childrensData.map((valueChildren, indexChildren) => {
      const {
        children,
        ...childrenData
      } = valueChildren;

      let childNewDataListIndex = ++currentDataListIndex;
      // 将index写入到原数据，以备其他使用
      valueChildren.index = childNewDataListIndex;
      // 写入子节点索引数组
      childrensIndexList.push(childNewDataListIndex);
      // 把每个children节点执行一次setnode
      this.setNode({
        index: childNewDataListIndex,
        data: childrenData,
        childrensData: children,
        parent: index,
      });
    });
    //新建当前节点对象，并设置为总节点index
    dataList[index] = new Node({
      data,
      parent,
      childrens: childrensIndexList
    });

  }
  return Tree;
})();

// let data = [{
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














/*******************  排序  *************/


const swap = (arr, index1, index2) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const bubbleSort = (data) => {
  // if (valuePath) 
  var numElements = data.length; // 数据总长度
  for (var outer = numElements; outer >= 2; --outer) { //numElements 至 2 ，总numElements-1次
    // console.log('outer' + outer);
    for (var inner = 0; inner <= outer - 2; ++inner) {
      // console.log('inner' + inner);
      if (data[inner].value > data[inner + 1].value) {
        swap(data, inner, inner + 1);
      }
      // console.log(data);
    }
  }
}



export default {
  Tree,
  sort: {
    bubbleSort
  }
}