function toCelcious(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

x = toCelcious(100);
y = toCelcious("xyz"); // Incorrect Arguments
z = toCelcious(); // Missing Arguments
console.log(x);
console.log(y);
console.log(z);