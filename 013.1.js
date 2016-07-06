//将罗马数字转换为整数，可以认为这个罗马数字不大于3999
//这个写法不是很好，对字符串扫描超过一遍
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var num = 0;
    var m = 0;
    var symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


    for (var i = 1; i < 13; i = i + 2) {
        if (s.indexOf(symbol[i]) > -1) {
            num += values[i];
            s = s.replace(symbol[i], '');
        }
    }

    while (s.charAt(m) !== '') {
        for (var j = 0; j < 13; j = j + 2) {
            if (symbol[j] === s.charAt(m)) {
                num += values[j];
                break;
            }
        }
        m++;
    }

    return num;
};