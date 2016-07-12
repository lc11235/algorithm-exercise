/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === null || s.length === 0) return false;
    var strQueue = [], len = s.length;
    for (var i = 0; i < len; i++) {
        if (s.charAt(i) === '{' || s.charAt(i) === '[' || s.charAt(i) === '(') {
            strQueue.push(s.charAt(i));
        }

        if (s.charAt(i) === '}' || s.charAt(i) === ']' || s.charAt(i) === ')') {
            if (strQueue.length === 0) return false;
            if (s.charAt(i) === '}' && strQueue[strQueue.length - 1] === '{') {
                strQueue.pop();
            } else if (s.charAt(i) === ']' && strQueue[strQueue.length - 1] === '[') {
                strQueue.pop();
            } else if (s.charAt(i) === ')' && strQueue[strQueue.length - 1] === '(') {
                strQueue.pop();
            } else {
                return false;
            }
        }
    }
    if(strQueue.length===0){
        return true;
    }else{
        return false;
    }
};

console.log(isValid('{[]'))