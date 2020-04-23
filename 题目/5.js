// 05js题目：判断数字是否为对称数，比如121，1331，111
function isReverse (num) {
  var revNum = String(num).split('').reverse().join('') - 0 ;
  return revNum === num ;
}
