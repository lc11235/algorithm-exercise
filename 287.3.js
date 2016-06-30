//给定一个n+1的数组，由1到n的数字组成，必定会有重复数字，找出这个重复数字。
//1.这个数字可以重复很多次，只有一个重复数字
//2.这个数组是只读的，不可以更改
//3.必须使用唯一不变的O(1)的额外空间
//4.运行时间低于O(n*n)
/**
 * @param {number[]} nums
 * @return {number}
 */
//这个地方的解法非常巧妙，因为这个数组的性质，如果我们把数组中存入的数字作为链表的指向
//那么这个数组就会构成一个有闭环的链表。
//这样问题就转变成了寻找有闭环的链表的第一个闭环的入口（即重复的数字）
//使用快慢指针法，可以在O(n)的时间内使用O(1)空间来寻找到这个重复的数字
//
var findDuplicate = function (nums) {
    var slow = 0;//js中没有指针，因此就用数组的引用关系来代替，此为慢指针
    var fast = 0;//此为快指针

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (nums[slow] != nums[fast]);//循环到相遇为止

    var restart = 0;
    while (nums[restart] != nums[slow]) {//参考快慢指针.md里面的解释
        restart = nums[restart];
        slow = nums[slow];
    }
    return nums[restart];
}