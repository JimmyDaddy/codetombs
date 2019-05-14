
function findeLongestWordInStr (s, d) {
  if (s && s.length > 0 && d && d.length > 0) {
    let maxStr = '';
    for (let index = 0; index < d.length; index++) {
      const element = d[index];
      const isSub = compareStr(s, element);
      if (isSub) {
        if (maxStr.length < element.length) {
          maxStr = element;
        }
      }
    }
    return maxStr;
  }
}

function compareStr(s, target) {
  if (target && target.length > 0 && s && s.length > 0 && target.length <= s.length) {
    for (let index = 0; index < target.length; index++) {
      const element = target[index];
      if (s.indexOf(element) < 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const s = findeLongestWordInStr("abppplee", ["able", "ale", "apple", "bale", "kangaroo"]);

console.log('====================================');
console.log(s);
console.log('====================================');