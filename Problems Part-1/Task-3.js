function checkVowel(char){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count =0;
    for(let i=0; i<char.length; i++){
        if(vowel.includes(char[i])){
            count++;
        }
    }
    return count;
}
const astring = "hello this is me";
console.log(checkVowel(astring));