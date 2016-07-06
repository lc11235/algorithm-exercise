//判断一个字符串是否和一个匹配模式匹配。
//需要支持'.'和'*'。
//其中'.'表示匹配任意单个的字符，'*'匹配0个和任意多个前面的元素
//匹配需要覆盖整个字符串，而非局部的
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p.length === 0) return s.length === 0;

    if (p.length == 1 || p.charAt(1) != '*') {
        if (s.length < 1 || (p.charAt(0) != '.' && s.charAt(0) != p.charAt(0))) return false;
        return isMatch(s.substring(1), p.substring(1));
    } else {
        var len = s.length;
        var i = -1;
        while (i < len && (i < 0 || p.charAt(0) == '.' || p.charAt(0) == s.charAt(i))) {
            if (isMatch(s.substring(i + 1), p.substring(2))) return true;
            i++;
        }
        return false;
    }
};