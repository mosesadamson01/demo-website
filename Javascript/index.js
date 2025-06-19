// 5th June, 2025
// let Day = Number(prompt("Enter your score"))
// console.log(typeof(Day))

// if (Day === 0){
//     alert("Sunday");
// }
// else if (Day === 1){
//     alert("Monday");
// }
// else if (Day === 2){
//     alert("Tuesday");
// }
// else if (Day === 3){
//     alert("Wednessday");
// }
// else if (Day === 4){
//     alert("Thursday");
// }
// else if (Day === 5){
//     calert("Friday");
// }
// else if (Day === 6){
//     alert("Saturday");
// }
// else{
//     alert("Invalid Day");
// }

// let age = 15;
// age >= 18? console.log("You can vote"): console.log("You can't vote")

// for ( let i =50; i<=100; i++){
//     if (i%2 == 0){
//         console.log(i)
//     }
// }

// let a = 2
// let i = 1
// while(a < 20){
//     if(a % 2 == 0 ){
//         i = a * i
//     }
//     a++
// }
// console.log(i)


// let num1 = Number(prompt("Input num1"))
// let num2 = Number(prompt("Input num2"))
// let operation = prompt("What operation will you like to perform")

// function sum(x, y, op){
//     if (op ==="sum"){
//         return x + y
//     }
//     else if(op === "sub"){
//         return x - y
//     }
//     else if(op === "mul"){
//         return x * y
//     }
// }
// alert(sum(num1, num2, operation))


function mos(n){
    if (n === 1 || n === 0){
        return 1}
        return n * mos ((n-1))
    }

console.log(mos(5))