let weight = 65;
let height = 1.8;
let bmi = weight / height ** 2;
console.log("Your BMI is " + bmi.toFixed(2));
if(bmi != 0){
    if(bmi < 18.5){
        console.log("You are Underweight");
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("You are Normal");
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log("You are Overweight");
    }
    else{
        console.log("You are Obese");
    }
}