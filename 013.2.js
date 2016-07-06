//将罗马数字转换为整数，可以认为这个罗马数字不大于3999
//这里的写法一遍扫描字符串，做法是判断前一个字符转换的数字是否小于后一个，是则用后一个减去前一个数字，否则就是相加
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var len = s.length;
    var result = 0;
    var sub = getRomanValue(s.charAt(0));
    var lastv = sub;

    for (var i = 1; i < len; i++) {
        var curv = getRomanValue(s.charAt(i));
        if (curv === lastv) {
            sub += curv;
        } else if (curv < lastv) {
            result += sub;
            sub = curv;
        } else {
            sub = curv - sub;
        }
        lastv = curv;
    }
    result += sub;
    return result;
};

function getRomanValue(c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}