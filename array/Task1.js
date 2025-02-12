const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversed_array = []

for(let i=0; i < colors.length; i++){
    const color = colors[i];
    reversed_array.unshift(color)
}
console.log(reversed_array);