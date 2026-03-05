class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s.toLowerCase()
      .split("")
      .filter((char) => char >= "a" && char <= "z")
      .join("");
    return s === s.split("").reverse().join("");
  }
}
