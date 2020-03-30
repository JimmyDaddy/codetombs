var lengthOfLongestSubstring = function (s) {
  var str = ''
  var max = 0
  Array.prototype.map.call(s, i => {
    var index = str.indexOf(i)
    if (index < 0) {
      str = str + i
    } else {
      str = str + i
      str = str.slice(index + 1, str.length)
    }
    max = max < str.length ? str.length : max
  })
  return max
}