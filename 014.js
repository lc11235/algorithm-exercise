//发现字符串数组中的字符串的最长公共前缀字符串
//通常的写法
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;
    if(strs === null||len===0) return '';
    
    var pre = strs[0];
    var i = 1;
    while(i<len){
        //将最长前缀的长度依靠每个元素的判断来增加或者减少
        while(strs[i].indexOf(pre) !== 0){
            pre = pre.substring(0,pre.length-1);
        }
        i++;
    }
    return pre;
};