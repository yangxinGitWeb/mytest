//7.js题目：实现一个js方法appendParams，可以给url加上多个新的参数，多考虑兼容性。用法例如appendParams('http://url', {a:1,b:2})返回http://url?a=1&b=2
function appendParams (urlStr, obj) { 
  var paramStr = ''
  if (obj && (Object.prototype.toString.call(obj) === '[object Object]')) {
    for (key in obj) { 
      paramStr += `${key}=${obj[key]}&`
    }
  }
  return (`${ urlStr }?${paramStr}`)
}