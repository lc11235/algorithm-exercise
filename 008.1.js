//将字符窜转换为数字
//仔细考虑所有的可能性，例如空格，负数标志，正数标志
//首先就是舍弃在遇到第一个可用的字符之前舍弃尽可能多的空格字符
//然后是可选的表示正负的符号，然后是进可能多的数字位
//如果字符串的第一个可用字符不是所要求的正负号或者数字，或字符串为空，均返回0
//如果转换的数字超出32位整形整数的范围，则返回上界或者下界
//这里的写法是使用了一个取巧的方法，直接调用了语言原生的转换方法
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const max = 2147483647;
    const min = -2147483648;
    var num = parseInt(str);
    if (isNaN(num)) return 0;
    if (num > max) return max;
    if (num < min) return min;
    return num;
};