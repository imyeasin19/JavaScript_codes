function inchToFeet(inch){
    const feet = inch/12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch%12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}

const inch = inchToFeet(65);
console.log(inch);