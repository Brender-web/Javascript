// function --->input----->parameter
// ---> some code is written
//----> Return value
//---> call function --> Argument


function greetuser(name) {
    console.log(name);
}

greetuser("juliet");
greetuser("josephine");
greetuser("jane");

function square(num) { 
    let result = num * num
    return result;
}
let value1 = square(8);
let value2 = square(12);
console.log(value1);
console.log(value2);

function convertToCelsius(fahrenheit) {
    let celsius =( (fahrenheit - 32) * 5) / 9;
    return celsius;
}

let tempOne = convertToCelsius(212);
console.log(tempOne);

function add(a,b,c){
    return a + b + c;
}
 let sumNumbers = (2+3+4);
 console.log(sumNumbers) ; 

 function minus(a, b){
    return a - b;
}
 let subtract1 = minus(4,2);
 console.log(subtract1);  

 function getScoreText(name = "jane", score = 45){
     return `Name: ${name} - Score: ${score}`;
 }
 let scoreData = getScoreText("juliet", 67);
 console.log(scoreData);

 
 
 function myplace(town){
     return`i live in ${town} `;
 }
 let data1 = myplace("nairobi");
 console.log(data1);