// Default Parameter Values

function greet(name = "Guest"){
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet(); // Uses default parameter value

greet("Bob");