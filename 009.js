//判断一个整数是否为回文数。
//注意到负数是不可能为回文数。只允许使用O(1)的额外空间
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x === 0) return true;

    var base = 1;
    while (Math.floor(x / base) >= 10) {
        base *= 10;
    }

    while (x) {
        var leftDigit = Math.floor(x / base);
        var rightDigit = x % 10;
        if (leftDigit != rightDigit) return false;

        x -= base * leftDigit;
        base /= 100;
        x = Math.floor(x / 10);
    }
    return true;
};