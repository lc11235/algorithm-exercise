//给定一个字符串，取得最长无重复连续字符串的长度
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var n = s.length;
    var hash = new hashMap();
    var ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
        if (!hash.containsKey(s.charAt(j))) {
            hash.set(s.charAt(j++), 1);
            ans = Math.max(ans, j - i);
        } else {
            hash.remove(s.charAt(i++));
        }
    }
    return ans;

};

function hashMap() {
    this.set = function (key, value) { this[key] = value };
    this.get = function (key) { return this[key] };
    this.containsKey = function (key) { return this.get(key) == null ? false : true };
    this.remove = function (key) { delete this[key] }
}