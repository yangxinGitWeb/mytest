// 06js题目：获取一个字符串的真实长度，中文当作2个字符长度
function getStrlen (str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
}
console.log(getStrlen('123我是中国人'))