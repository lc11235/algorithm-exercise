//给定一个非负整数数组a[n],整个数组组成了一系列的店(i,a[i])，每个点都会与点(i,0)组成一条直线
//要求是找出其中任意两条直线与x轴构成一个矩形，用整个矩形来装水，取得最大的水的体积。
//即取得所能围成的最大的矩形面积
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var capability = 0, left = 0, right = height.length - 1;

    while (left < right) {
        const water = Math.min(height[left], height[right]) * (right - left);

        if (water > capability) capability = water;

        if (height[left] < height[right]) {
            ++left;
        } else {
            --right;
        }
    }
    return capability;
};