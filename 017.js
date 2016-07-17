//给定一个标准的手机拨号键盘，任意给定义一个字符串数字，输出相应数字的
//手机拨号键盘上对应的字母组合
//Input:Digit string "23"
//Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits===null || digits.length===0) return new Array();
    var ans = [];
    var mapping = new Array('0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz');
    ans.push('');
    //做法是使用后进先出栈
    for(var i=0;i<digits.length;i++){
        var x = parseInt(digits.charAt(i));
        while(ans[0].length == i){
            var t = ans.shift();
            for(var s in mapping[x]){
                ans.push(t+mapping[x].charAt(parseInt(s)));
            }
        }
    }
    return ans;
};