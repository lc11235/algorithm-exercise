//给定一个非负整数num，对于每个数字i而言，0<= i <=num，计算每个数字的
//二进制表示中1的个数，并将结果作为一个数组返回
//解法是实现一个countBit，对任意非负整数你，计算它的二进制表示中1的个数
//从0循环到num，求出每个的值，将其放在数组中返回。
//很容易就可以得到一个时间复杂度为O(n*sizeof(integer))的算法，但是可以得到一个O(n)时间复杂度的算法吗？
//空间复杂度应该为O(n)
//可以将这个算法写成一个万能公式，不需要使用任何语言内置的统计函数
//通用的解法，一个时间复杂度为O(log(n))的方法
/**
 * @param {number} num
 * @return {number[]}
 */
function countBit(n) {
    var ret = 0;
    while (n > 0) {
        //此处与1按位与，对于1而言，只有最后一位是1，前面31位均为0
        //因此n的前31位数字和它进行与操作，只能全为0，倘若n的最后一位为1、
        //则ret值为1，否则为0；
        ret += n & 1;
        //将n进行右移，左边补0，移掉的位会被去掉，这样就可以对n的每一位上数字是0还是1进行比较和判断了
        n >> 1;
    }
    return ret;
}
var countBits = function (num) {
    var ret = [];
    for (var i = 0; i < num; i++) {
        ret.push(countBit(i));
    }
    return ret;
};