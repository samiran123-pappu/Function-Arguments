// Function Rest Parameter


function sum(...args){
    let total = 0;
    for(let i = 0; i < args.length; i ++){
        total += args[i];
    }
    return total;
}

let x = sum(1, 2, 3, 4, 5);
console.log(x); 