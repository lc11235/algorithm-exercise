//将罗马数字转换为整数，可以认为这个罗马数字不大于3999
//简洁且快速的解法
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var res = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var c = s.charAt(i);
        switch (c) {
            case 'I':
                res += (res >= 5 ? -1 : 1); break;
            case 'V':
                res += 5; break;
            case 'X':
                res += 10 * (res >= 50 ? -1 : 1); break;
            case 'L':
                res += 50; break;
            case 'C':
                res += 100 * (res >= 500 ? -1 : 1); break;
            case 'D':
                res += 500; break;
            case 'M':
                res += 1000; break;
        }
    }
    return res;
};
