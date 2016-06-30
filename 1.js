//指定一个数组和一个和值，返回一个包含两个数字的数组，使得这两个数字的和等于这个和值。
//使用hashMap可以使复杂度为O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var hashMap = {
        set: function (key, value) { this[key] = value },
        get: function (key) { return this[key] },
        containsKey: function (key) { return this.get(key) == null ? false : true },
        remove: function (key) { delete this[key] }
    };

    for (var i = 0; i < nums.length; i++) {//使用hashMap，不相等是数字存入到hashMap中，这样一直循环到数组末尾就可以找到相等的数字。
        var complement = target - nums[i];
        if (hashMap.containsKey(complement)) {
            return new Array(hashMap.get(complement), i);
        }
        hashMap.set(nums[i], i);
    }

};