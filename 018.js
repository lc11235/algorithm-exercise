//与15类似，给定一个数组找出其中的四元数组的和值等于target的所有组合
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    var res = [];
    var len = nums.length;
    if (nums === null || len < 4) return res;

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
    //具体的做法是将四元数组的组合分解成三元以至于二元

    var max = nums[len - 1];
    if (4 * nums[0] > target || 4 * max < target) return res;

    var i, z;
    for (i = 0; i < len; i++) {
        z = nums[i];
        if (i > 0 && z === nums[i - 1]) continue;
        if (z + 3 * max < target) continue;
        if (4 * z > target) break;
        if (4 * z === target) {
            if (i + 3 < len && nums[i + 3] === z) {
                res.push(new Array(z, z, z, z));
            }
            break;
        }

        threeSumForfourSum(nums, target - z, i + 1, len - 1, res, z);
    }

    return res;
};

function threeSumForfourSum(nums, target, low, high, fourSumList, z1) {
    if (low + 1 >= high) return;

    var max = nums[high];
    if (3 * nums[low] > target || 3 * max < target) return;

    var i, z;
    for (i = low; i < high - 1; i++) {
        z = nums[i];
        if (i > low && z == nums[i - 1]) continue;
        if (z + 2 * max < target) continue;
        if (3 * z > target) break;
        if (3 * z == target) {
            if (i + 1 < high && nums[i + 2] == z) {
                fourSumList.push(new Array(z1, z, z, z));
            }
            break;
        }

        twoSumForFourSum(nums, target - z, i + 1, high, fourSumList, z1, z);
    }
}

function twoSumForFourSum(nums, target, low, high, fourSumList, z1, z2) {
    if (low >= high) return;
    if (2 * nums[low] > target || 2 * nums[high] < target) return;
    var i = low, j = high, sum, x;
    while (i < j) {
        sum = nums[i] + nums[j];
        if (sum == target) {
            fourSumList.push(new Array(z1, z2, nums[i], nums[j]));

            x = nums[i];
            while (++i < j && x == nums[i])
                ;
            x = nums[j];
            while (i < --j && x == nums[j])
                ;
        }
        if (sum < target) i++;
        if (sum > target) j--;
    }
}
