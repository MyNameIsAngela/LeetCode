/*
 * @lc app=leetcode.cn id=62 lang=java
 *
 * [62] 不同路径
 */
class Main {
    public static void main(String[] args) {
        // Create a new Solution62 instance
        Solution62 Solution62 = new Solution62();
        // Create a test case
        // String testCase = "()[]{}";
        // Get the answer
        // boolean answer = Solution62.uniquePaths(3,2);
        // Print the answer
        System.out.println(Solution62.uniquePaths(3,2));
    }
}

// @lc code=start
class Solution62 {
    // HashMap<Integer, Integer> map = new HashMap<>();
    // public  boolean divisorGame(int N) {
    //     if ( map.get(N) != null && map.get(N) == true) {
    //         return map.get(N);
    //     }
    //     for (int i = 1; i < N; i++) {
    //         if (N % i == 0) {
    //             boolean res = divisorGame(N - i);
    //             if (map.get(N-i) == null) {
    //                  map.put(N-i, res);
    //             }
    //             return !res;
    //         }
    //     }
    //    return false;
    // }

    
    int[][] map = new int[101][101]; 
    public int uniquePaths(int m, int n) {
        System.out.println("first1="+map[m][n]);
        if(map[m][n] !=0){
            return map[m][n];
        } else {
            if(m == 1 || n == 1){
                map[m][n] = 1;
            }
            map[m][n] = uniquePaths(m-1,n) + uniquePaths(m,n-1);
        }
        return map[m][n];
        // return 1;
    }
}
// @lc code=end



// class Solution62 {

//     ...

//     public boolean isValid(String s) {

//         ...

//         return answer;
//     }
// }