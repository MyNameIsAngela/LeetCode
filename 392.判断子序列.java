/*
 * @lc app=leetcode.cn id=392 lang=java
 *
 * [392] 判断子序列
 * 14/14 cases passed (24 ms)
 * Your runtime beats 28.95 % of java submissions
 * Your memory usage beats 97.45 % of java submissions (48.2 MB)
 * 查找方法太慢，可以直接用sting的indexOf()来找
 */

// @lc code=start
class Solution {
    public boolean isSubsequence(String s, String t) {
            // 我的解法
            // if(s.length() > t.length()){
            //     return false;
            // } else if(s.length()==0){
            //     return true;
            // }
            // int sPoint = 0;
            // for(int i = 0; i < t.length(); i++){
            //     if(sPoint == s.length()){
            //         break;
            //     }
            //     if(s.charAt(sPoint) == t.charAt(i)){
            //         sPoint++;
            //     }
            // }
            // return sPoint+1 > s.length();

            // 他人较优解法
            for(int i = 0, pos = 0; i < s.length(); i++, pos++){
                pos = t.indexOf(s.charAt(i), pos);
                if(pos == -1){
                    return false;
                }
            }
            return true;
        }
    
}
// @lc code=end

