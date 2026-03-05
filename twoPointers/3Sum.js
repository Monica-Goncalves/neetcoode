class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  // [-4, -1, -1, 0, 1, 2]
  threeSum(nums) {
    let triplets = [];
    let arr = nums.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      let k = arr.length - 1;

      while (j < k) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          triplets.push([arr[i], arr[j], arr[k]]);
          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
    // remove duplicate
    let unique = [];

    for (let sub of triplets) {
      let dupe = unique.some(
        (key) => key[0] === sub[0] && key[1] === sub[1] && key[2] === sub[2]
      );

      if (!dupe) {
        unique.push(sub);
      }
    }
    return unique;
  }
}
