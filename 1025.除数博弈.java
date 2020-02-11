/*
 * @lc app=leetcode.cn id=1025 lang=java
 *
 * [1025] 除数博弈
 * 40/40 cases passed (4 ms)
 * Your runtime beats 19.28 % of java submissions
 * Your memory usage beats 20.02 % of java submissions (33.1 MB)
 * // 时间长的原因，其实我已经推出来了，结论就是 return N % 2 == 0; 不用另外算
 */

// @lc code=start
class Solution {
    public boolean divisorGame(int N) {
        boolean[] arr = new boolean[N+1];
        arr[1]= false;
        for(int i = 2; i <= N; i++){
            arr[i] = false;
            for(int j = 1; j < Math.sqrt(i)+1; j++){
                if(i % j == 0 && !arr[i-j]){
                    arr[i] = true;
                    break;
                }
            }
        }
        return arr[N];
    }
}
// @lc code=end

