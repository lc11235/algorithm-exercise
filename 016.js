//与15类似，给定一个数组S，包含n个整数数字。给定一个target，在数组中
//寻找最接近target的三元数组的和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums === null || nums.length < 3) return 0;
    var closet = nums[0] + nums[1] + nums[2];
    function compare(value1, value2) {
        if (value1 > value2) {
            return 1;
        } else if (value1 < value2) {
            return -1;
        } else {
            return 0;
        }
    }

    nums.sort(compare);
    //写法有一些小的改变，比较与target的绝对值大小
    //原理是一样的，固定一个值，其余两个值在数组的头尾移动

    var len = nums.length;
    for (var first = 0; first < len - 2; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) continue;
        var second = first +1;
        var third = len -1;
        while(second < third){
            var curSum = nums[first] + nums[second] + nums[third];
            if(curSum == target)return curSum;
            if(Math.abs(target - curSum) < Math.abs(target - closet)){
                closet = curSum;
            }
            if(curSum > target){
                third--;
            } else {
                second++;
            }
        }
    }
    return closet;
};