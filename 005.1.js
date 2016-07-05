//给定一个字符串S，寻找S中最长的回文字符串，可以假设S的最大长度为1000.
//并且存在一个独特的最长回文字符串
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(!s)return s;
    var len = s.length;
    var ans = 0;
    var bns = 0;
    var max = 0;
    var max1 = 0;
    var max2 = 0;
    var mid1 = 0;
    var mid2 = 0;
    var mid = 0;

    for (var i = 0; i < len; i++) {//使用hashMap，不相等是数字存入到hashMap中，这样一直循环到数组末尾就可以找到相等的数字。
        var lenPalin = len - i - 1 >= i ? i : len - i - 1;
        for (var j = 1; j <= lenPalin; j++) {
            if (s.charAt(i + j) === s.charAt(i - j)) {
                ans++;
            } else {
                break;
            }
        }
        var lenPa2 = len - i >= i ? i : len - i;
        for (var j = 0; j <= lenPa2; j++) {
            if (s.charAt(i - j) === s.charAt(i + j + 1)) {
                bns++;
            } else {
                break;
            }
        }

        if (ans > max1) {
            mid1 = i;
        }
        if(bns > max2){
            mid2 = i;
        }
        max1 = Math.max(max1, ans);
        max2 = Math.max(max2, bns);
        ans = 0;
        bns = 0;

    }
    if(max1>=max2){
        return s.slice(mid1 - max1, mid1 + max1 + 1);
    } else {
        return s.slice(mid2 + 1 - max2, mid2 + max2 + 1);
    }
    
};

console.log(longestPalindrome('b'));