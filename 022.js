/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = [];
    addingpar(res, '', n, 0);
    return res;
};

function addingpar(v, str, n, m) {
    if (n === 0 && m === 0) {
        v.push(str);
        return;
    }

    if (m > 0) { addingpar(v, str + ')', n, m - 1); }
    if (n > 0) { addingpar(v, str + '(', n - 1, m + 1); }
}

console.log(generateParenthesis(4));