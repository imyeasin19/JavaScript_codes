function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)== false){
            unique.push(item);
        }
    }
    return unique;
}
const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
console.log(noDuplicate(arr));
