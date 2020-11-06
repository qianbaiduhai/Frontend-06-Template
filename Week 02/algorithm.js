// (合并两个有序数组)https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnumcr/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while (len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

// 第一个错误版本 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnto1s/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const solution = (isBadVersion) => {
    // n是版本总数 函数返回第一个错误的版本号
    return (n) => {
        let low = 0,
            high = n;
        let firstBadVer = n;
        while (low <= high) {
            const mid = (low + high) >>> 1;
            if (isBadVersion(mid)) {
                firstBadVer = mid; // mid是坏版本，
                high = mid - 1; // 将右指针考察mid-1
            } else {
                low = mid + 1; // mid还不是坏版本，将左指针考察到mid+1
            }
        }
        return firstBadVer;
    };
};
