// 'use strick'

let firstname = "Manuraj";
let age = 22;

// if(firstname[0] == "M"){
//     console.log("your name start with M")
// }

// if(age > 18){
//     console.log("you are above 18")
// }

// if(firstname[0] == "M" && age > 18){
//     console.log("your name start with M and above 18")
// }
// else{
//     console.log("inside else")
// }

// or operator 


// if(firstname[0] == "M" || age > 18){
//     console.log("inside if")
// }
// else{
//     console.log("inside else")
// }


// nested if else

// winning number 19

// 19 your guess is rigth 
// 17 you low
// 20 to high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess == winningNumber){
    console.log("Your guess is right!!");
}
    else{
        if(userGuess < winningNumber){
            console.log("too low");
        }else{
            console.log("too high");
        }
    }
    