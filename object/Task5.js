let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObject);
const type_keys = Object.values(myObject);
for(key of keys){
    console.log("key:",key," | ", "type:",typeof myObject[key]);
}




