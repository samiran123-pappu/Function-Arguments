// The Arguments Object



function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }

    }
    return max;
}


x = findMax(1, 2, 3, 4, 5);
console.log(x);