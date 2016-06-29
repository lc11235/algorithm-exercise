//指定一个字符串，指定层数，将字符串按先后顺序排列成连续的W形状。
//此时按照正常读法，从左至右，从上到下，一行一行的将字符串输出。
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var len = s.length;
    var str = '';
    var rate = 2 * numRows - 2;
    var remainder = len % rate;
    var goal = Math.floor(len / rate);
    if (numRows == 1) {
        return s;
    }
    for (var i = 0; i < numRows; i++) {
        str += strAdd(i);
    }
    function strAdd(m) {
        var strRows = '';
        if (!s.charAt(m)) return strRows;
        if (m == 0) {
            for (var j = 0; j < goal; j++) {
                strRows += s.charAt(rate * j);
            }
            if (remainder > 0) {
                strRows += s.charAt(rate * goal + 0);
            }

        } else if (m == (numRows - 1)) {
            for (var x = 0; x < goal; x++) {
                strRows += s.charAt(rate * x + numRows - 1);
            }
            if (remainder >= numRows) {
                strRows += s.charAt(rate * goal + numRows - 1);
            }
        } else {
            for (var z = 0; z < goal; z++) {
                strRows += s.charAt(rate * z + m) + s.charAt(rate * z + rate - m);
            }
            if (remainder > 0 && remainder <= numRows) {
                strRows += s.charAt(rate * goal + m);
            } else if (remainder > numRows) {
                strRows += s.charAt(rate * goal + m);
                if (remainder >= 2 * numRows - m - 1) {
                    strRows += s.charAt(rate * goal - 1 + 2 * numRows - m - 1);
                }
            }
        }
        return strRows;
    }
    return str;
};