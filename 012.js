//将正整数转换为相应的罗马数字，假设这个整数的范围不大于3999
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var str = '';
    var symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; num !== 0; i++) {
        while (num >= values[i]) {
            num -= values[i];
            str += symbol[i];
        }
    }

    return str;
};