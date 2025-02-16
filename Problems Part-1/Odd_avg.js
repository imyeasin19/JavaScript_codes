function oddAvg(numbers){
    const odds =[];
    let sum = 0;
    for(const num of numbers){
    if(num%2==1){
        odds.push(num);
    }
    }
    for(const number of odds){
        sum += number;
    }
    let avg = sum/odds.length;
    return avg;
}

const num = [1,2,3,4,5,6,7,8,9,10];
console.log(oddAvg(num));
