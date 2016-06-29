//两个一排序的数组，取得两个数组合并和的中位数
//奇数则是数组中间值，偶数则是中间两值之和除以2
//要求时间复杂度为O(log(m+n)),m和n分别是两个数组的长度
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var median = -1;
    var lengtha = nums1.length;
    var lengthb = nums2.length;
    if ((lengtha + lengthb) % 2 === 0) {
        var t1 = finder(nums1, 0, lengtha - 1, nums2, 0, lengthb - 1, (lengtha + lengthb) / 2);
        var t2 = finder(nums1, 0, lengtha - 1, nums2, 0, lengthb - 1, (lengtha + lengthb + 2) / 2);
        median = (t1 + t2) * 1.0 / 2;
    }
    else {
        median = finder(nums1, 0, lengtha - 1, nums2, 0, lengthb - 1, (lengtha + lengthb + 1) / 2);
    }

    return median;

};

function finder(a, sa, ea, b, sb, eb, k) {
    var ma = Math.floor((sa + ea) / 2);
    var nb = Math.floor((sb + eb) / 2);

    if (sa > ea) {
        return b[sb + k - 1];
    }
    if (sb > eb) {
        return a[sa + k - 1];
    }

    if (a[ma] >= b[nb]) {
        if (((ma - sa + 1) + (nb - sb + 1)) > k) {
            return finder(a, sa, ma - 1, b, sb, eb, k);
        } else {
            return finder(a, sa, ea, b, nb + 1, eb, k - (nb + 1 - sb));
        }
    } else {
        if (((ma - sa + 1) + (nb - sb + 1)) > k) {
            return finder(a, sa, ea, b, sb, nb - 1, k);
        } else {
            return finder(a, ma + 1, ea, b, sb, eb, k - (ma + 1 - sa));
        }
    }
}