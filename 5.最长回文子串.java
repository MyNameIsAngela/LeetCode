/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
    // public String longestPalindrome(String s) {
    //     if(s.length()<=0){
    //         return "";
    //     }
    //     int pointX = 0;
    //     int pointY = 0;
    //     int[][] arr = new int[s.length()][s.length()];   
    //     for(int i = 0; i < s.length(); i++){
    //         for(int j = 0; j < s.length(); j++){
    //             boolean isSame = s.charAt(i) == s.charAt(s.length() -1 - j);
    //             // 存储二维数组
    //             if(!isSame){
    //                 arr[i][j] = 0;
    //             } else if(i == 0 || j == 0){
    //                 arr[i][j] = 1;
    //             } else {
    //                 arr[i][j] = arr[i - 1][j - 1] + 1;
    //             }
    //             // 存储最长的点
    //             if(arr[pointX][pointY] < arr[i][j] ){
    //                 pointX = i;
    //                 pointY = j;
    //             }
    //         } 
    //     }
    //     return s.substring(pointX - arr[pointX][pointY] + 1, pointX + 1);
    // }
    
    private String getLongestPalindrome(String base, int left, int right) {
        if (left < 0 || right < 0 || left >= base.length() || right >= base.length()) {
            // throw exception
        }
        while(left >= 0 && right < base.length() && base.charAt(left) == base.charAt(right)) {
            left --;
            right ++;
        }
        return base.substring(left + 1, right);
    }
    public String longestPalindrome(String s) {
        String candidate = "";
        for (int i = 0; i < s.length(); i++) {
            String tmp = getLongestPalindrome(s, i, i);
            System.out.println(tmp);
            if (tmp.length() > candidate.length()) {
                candidate = tmp;
            }
            if ((i + 1) < s.length()) {
                tmp = getLongestPalindrome(s, i, i + 1);
                System.out.println(tmp);
                if (tmp.length() > candidate.length()) {
                    candidate = tmp;
                }
            }
        }
        return candidate;
    }
    public String longestPalindrome(String s) {
        String candidate = "";
        int last_index[] = new int[s.length()];
        int curr_index[] = new int[s.length()];

        // int[] last_index;
        // int[] curr_index;
        // int last_index[] = new int[];
        // int curr_index[] = new int[s.length()];
        for(int i = 0; i<s.length(); i++){
            curr_index[0]= i;
            if(i == 0){
                // last_index = curr_index;
                candidate = s.substring(i, i+1);
            }else if(i > 0){
                for(int j = 0; j < last_index.length; j++){
                    // 0 没判断
                    // 记录 last_index 长度
                    if(s.charAt(i) == s.charAt(last_index[j] -1)){
                        // curr_index.push(last_index[j] -1);
                        curr_index[curr_index.length] = last_index[j] -1;
                        String tmp = s.substring(last_index[j] -1, i +1);
                        if(tmp.length() > candidate.length()){
                            candidate = s.substring(last_index[j] -1, i +1);
                        }
                    }
                }
            }
            last_index = curr_index; //
            curr_index = []; // 
        }
        return candidate;
    }
}
// @lc code=end

