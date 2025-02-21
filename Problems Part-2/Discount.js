function discount(quantity){
    if(quantity <=100){
        let totat = quantity*100;
        return total;
    }
    else if(quantity <= 200){
        let total = quality*90;
        return total;
    }
    else{
        let total = quantity*80;
        return total;
    }
}
const total = discount(5);
console.log(total);