function tempConverter(celcius){
    return (celcius * 9/5) + 32;
}

const cel = 32;
const fahrenheit = tempConverter(cel);
console.log(cel + "°C is equal to " + fahrenheit + "°F");