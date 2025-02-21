function calculateVAT(price){
    let vat = 0;
    if(typeof price == 'string' || price < 0){
        return "Invalid";
    }
    else{
        vat = price * 7.5/100;
    }
    return vat;
}

function validContact(contact){
    if(typeof contact !== 'string'){
        return "Invalid";
    }
    for(let i=0; i<contact.length; i++){
        if(contact.length == 11 && contact[0] =='0' && contact[1] =='1'){
            if(contact.includes(" ")){
                return false;
            }
            else{
                return true;
            }
        }
        else{
            return false
    }
}
}

function willSuccess(marks){
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    let pass =[];
    let fail = [];
    for(let i = 0; i<marks.length; i++){
        if(marks[i] >= 50){
            pass.push(marks[i]);
        }
        else{
            fail.push(marks[i]);
        }
    }
    if(pass.length > fail.length){
        return true;
    }
    else{
        return false;
    }
}

function validProposal(person1, person2){
    ageDifference = Math.abs(person1.age - person2.age);
    if(typeof person1 !== 'object' || typeof person2 !== 'object'){
        return "Invalid";
    }
    if(person1.gender !== person2.gender && ageDifference <=7){
        return true;
    }
    else{
        return false;
    }
    
}

function calculateSleepTime(times){
    let sum = 0;
    for(let i=0; i<times.length; i++){
        if(typeof times[i] !== 'number'){
            return "Invalid";
        }
        sum += times[i];
    }
    let hours = parseInt(sum/3600);
    let hourRemaining = sum%3600;
    let minutes = parseInt(hourRemaining/60);
    let seconds = hourRemaining%60;

    return {
        hour: hours,
        minute: minutes,
        second: seconds,
    }
}



