function repeated(arr, n){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == n){
            count++;
        }
    }
    return count;
}
const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,5];
const find = 25;
console.log(repeated(arr, find));

