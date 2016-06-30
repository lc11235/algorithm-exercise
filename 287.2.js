//给定一个n+1的数组，由1到n的数字组成，必定会有重复数字，找出这个重复数字。
//1.这个数字可以重复很多次，只有一个重复数字
//2.这个数组是只读的，不可以更改
//3.必须使用唯一不变的O(1)的额外空间
//4.运行时间低于O(n*n)
/**
 * @param {number[]} nums
 * @return {number}
 */
//使用抽屉原理和二分查找
//对于数组中位数左边部分而言，如果小于中位数的数字的数目大于中位数本身大小的话，那么重复数字必定在数组左边
//，同理可得到右边的情况，对于这个题目而言。
//空间复杂度O(1),时间复杂度为O(n*log(n))
var findDuplicate = function (nums) {
    var len = nums.length;
    var low = 0;
    var high = len - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);//取得中位数
        var times = 0;
        for (var i = 0; i < len; i++) {
            if (nums[i] <= mid) times++;//计算整个数组中小于中位数的数字的数目
        }
        if (times > mid) {//根据抽屉原理，这个数字不可能大于mid，否则，就是重复数字在左边
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}