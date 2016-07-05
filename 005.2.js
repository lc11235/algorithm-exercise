//这个写法速度更快
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s) return s;
    var length = s.length;
    len = 0, pos = 0;
    for (var i = 0; i < length; i++) {
        checkPal(s, i, i, pos, len);
        checkPal(s, i, i + 1, pos, len);
    }

    return s.substr(pos,len);
}

function checkPal(s, m, n, pos1, len1) {
    while ((m >= 0) && (n < s.length) && (s.charAt(m) == s.charAt(n))) {
        m--;
        n++;
    }
    if (n - m - 1 > len1) {
        len1 = n - m - 1;
        pos1 = m + 1;
    }
    len = len1;
    pos = pos1;
}