
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 初始化 arr，将nums赋值为[{pos:0,val:2},{pos:1,val:7}]
    let arr = (nums || []).map((item,index)=>{
        return {pos: index, val:item}
    })
    // 根据 nums 的 val 排序 arr
    arr.sort((a, b)=> {
        return a.val - b.val;
    });
    // start,end 记录 arr 的位置
    let start = 0, end = arr.length -1;
    while(arr[start].val + arr[end].val !== target){
        if(arr[start].val + arr[end].val > target){
            end --;
        } else if(arr[start].val + arr[end].val < target){
                  start++;
                  }
    }
    return [arr[start].pos, arr[end].pos];
};