//给定一个非负整数num，对于每个数字i而言，0<= i <=num，计算每个数字的
//二进制表示中1的个数，并将结果作为一个数组返回
//解法是实现一个countBit，对任意非负整数你，计算它的二进制表示中1的个数
//从0循环到num，求出每个的值，将其放在数组中返回。
//很容易就可以得到一个时间复杂度为O(n*sizeof(integer))的算法，但是可以得到一个O(n)时间复杂度的算法吗？
//空间复杂度应该为O(n)
//可以将这个算法写成一个万能公式，不需要使用任何语言内置的统计函数
//这个解法使用了js的特性，正则替换。写法非常简洁。
//但是移植到其他语言就会出现困难，且性能依赖于NUmber.prototype.toString(2)和String.prototype.replace的实现
/**
 * @param {number} num
 * @return {number[]}
 */
function countBit(n) {
    //使用正则去掉其中的0
    return n.toString(2).replace(/0/g, "").length;
}
var countBits = function (num) {
    var ret = [];
    for (var i = 0; i < num; i++) {
        ret.push(countBit(i));
    }
    return ret;
};