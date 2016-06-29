//给定一个n+1的数组，由1到n的数字组成，必定会有重复数字，找出这个重复数字。
//1.这个数字可以重复很多次，只有一个重复数字
//2.这个数组是只读的，不可以更改
//3.必须使用唯一不变的O(1)的额外空间
//4.运行时间低于O(n*n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var hashMap = {
        set:function(key,value){this[key] = value},
        get:function(key){return this[key]},
        containsKey:function(key){return this.get(key) == null ? false:true},
        remove:function(key){delete this[key]}
    }
    var len = nums.length;
    for(var i=0; i<len; i++){
        var temp =0;
        if(hashMap.containsKey(nums[i])){
            return nums[i];
        }
        hashMap.set(nums[i],i);
    }
};

var findDuplicate = function (nums) {
    var len = nums.length;
    var temp = -1;
    for(var i=0; i<len;i++){
        
    }
};