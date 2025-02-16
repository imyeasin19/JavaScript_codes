function findLongWord(str){
    const words = str.split(" ");
    let Longword = "";
    for(let word of words){
        if(word.length > Longword.length){
            Longword = word;
        }
    }
    return Longword;
}
const input = 'I am learning Programming to become a programmer';
console.log(findLongWord(input));