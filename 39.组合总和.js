/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

backtrack(candidate, target,point,repeat){
    let sum = 0;
    candidate.map(item=>sum +=item);
    if(sum === target){
        return candidate;
    } else if(sum > target){
        return false;
    } else {
        let curCandidate = [];
        for(let i = 0; i< candidate;i++){
            if(i == point){
                for(let j = 0; j<repeat;j++){
                    curCandidate.push(candidate[i]);
                }
            } else {
                curCandidate.push(candidate[i]);
            }
        }
        backtrack(curCandidate,target,point,repeat++);
    }

}

var combinationSum = function(candidates, target) {
    if(target === 0  || candidates.length ===0){
        return [];
    }
    candidates.sort();
    candidates.filter(item=>item>target);
    backtrack(candidate,target,0,0);
};
// @lc code=end

