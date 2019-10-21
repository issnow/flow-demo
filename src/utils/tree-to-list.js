// 树形结构转换为扁平数组
export const treeToList = tree => {
  var queen = [];
  var out = [];
  queen = queen.concat(tree);
  while (queen.length) {
    var first = queen.shift();
    if (first.children) {
      queen = queen.concat(first.children);
      delete first["children"];
    }
    out.push(first);
  }
  return out;
};

// 调用时，字段名以字符串的形式传参，如listToTree(source, 'id', 'parentId', 'children')
export function listToTree(
  source,
  id = "id",
  parentId = "pid",
  children = "children"
) {
  let cloneData = JSON.parse(JSON.stringify(source));
  return cloneData.filter(father => {
    if (father.pid == undefined) father.pid = 0;
    let branchArr = cloneData.filter(child => father[id] == child[parentId]);
    if (father.xtype == "div") {
      branchArr.length > 0
        ? (father[children] = branchArr)
        : (father[children] = []);
    } else {
      if (branchArr.length > 0) {
        father[children] = branchArr;
      }
    }
    return father[parentId] == 0; // 如果第一层不是parentId=0，请自行修改
  });
}

export function formatList(list) {
  // [{name:'card',children:[]},{},{}]
  var res = [];
  var temp = {
    xtype: "card",
    children: []
  };
  list.map(e => {
    if (e.xtype != "cardGroup") {
      temp.children.push(e);
    } else {
      if (temp.children.length == 0) {
        res.push(e);
      } else {
        res.push(temp, e);
      }
      temp = {
        xtype: "card",
        children: []
      };
    }
  });
  res.push(temp);
  return res;
}

// 遍历树形结构,把actived设置为false
export function queryList(arr, target) {
  arr.map(e => {
    if (e.id == target.id) {
      e.actived = true;
    } else {
      e.actived = false;
    }
    if (e.children && e.children.length > 0) {
      queryList(e.children, target);
    }
  });
}
