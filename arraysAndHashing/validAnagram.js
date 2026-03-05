class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");

    return sortedS === sortedT;

    // let sMap = {}
    // let tMap = {}

    // for(let i = 0; i < s.length; i++){
    //     sMap[s[i]] = (sMap[s[i]] || 0) + 1
    //     tMap[t[i]] = (tMap[t[i]] || 0) + 1
    // }
  }
}
