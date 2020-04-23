// 题目4：用js实现代码，找出2个数组里相同的元素

function getSame (arr1, arr2) {
  var result = new Array();
  var c = arr2.toString();
  for (var i = 0; i < arr1.length; i++) {
    if (c.indexOf(arr1[i].toString()) > -1) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          result.push(arr1[i]);
          break;
        }
      }
    }
  }
  
  return result;
}