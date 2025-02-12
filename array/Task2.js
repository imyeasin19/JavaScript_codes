const numbers = [12, 98, 5, 41, 23, 78, 46];

const even_numbers = [];
for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    if(number % 2 == 0){
        even_numbers.push(number);
    }
}
console.log(even_numbers);