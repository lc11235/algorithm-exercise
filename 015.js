//给定一个包含n个整数的数组，找出其中所有的三元数组，三元数组需要
//使其中的三个元素符合a+b+c=0的条件
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var ret = [];
    if (nums === null || nums.length < 3) return ret;

    function compare(value1, value2) {
        if (value1 > value2) {
            return 1;
        } else if (value1 < value2) {
            return -1;
        } else {
            return 0;
        }
    }

    //下面的find函数需要数组是排好序的
    nums.sort(compare);

    var len = nums.length;
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        //基本的思路是固定一个数字，将另外两个数字设为头尾两个指针
        //依靠判断来移动前后的指针
        find(nums, i + 1, len - 1, nums[i], ret);
    }
    return ret;
};

function find(num, begin, end, target, ret) {
    var l = begin, r = end;
    while (l < r) {
        if (num[l] + num[r] + target === 0) {
            var ans = new Array(target, num[l], num[r]);
            ret.push(ans);
            while (l < r && num[l] == num[l + 1]) l++;
            while (l < r && num[r] == num[r - 1]) r--;
            l++;
            r--;
        } else if (num[l] + num[r] + target < 0) {
            l++;
        } else {
            r--;
        }
    }
}