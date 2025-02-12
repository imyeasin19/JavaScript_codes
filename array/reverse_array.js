const numbers =[1,2,3,4,5,6,7];

//console.log(numbers.reverse());

//Another way

// const rev_numbers = [];

// for(const num of numbers){
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

//Another way
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
}