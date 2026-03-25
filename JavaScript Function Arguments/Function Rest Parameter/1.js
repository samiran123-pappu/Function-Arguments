// Example: Arguments are Passed by Value
function changeValue(x){
    x = 10;
}

let y = 5;
changeValue(y);
console.log(y); // y is still 5

// Example: Objects are Passed by Reference
function changeProperty(obj){
    obj.name = "John";
}

let person = {
    name: "Alice"
};

changeProperty(person);
console.log(person.name); // person.name is now "John"
