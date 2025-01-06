// Deliverable # 1 solution code
const greeting = "Welcome to Flatburger!"

// Deliverable # 2 solution code
const num1 = 7

// Deliverable # 3 solution code
let num2 = "14"

// Deliverable # 4 solution code
console.log(typeof num2)

// Deliverable # 5 solution code
num2 = Number(num2)

// Deliverable # 6 solution code
console.log(typeof num2)

// Deliverable # 7 solution code
const sum = num1 + num2

// Deliverable # 8 solution code
const sumString = `${num1} + ${num2} = ${sum}`

// Deliverable # 9 solution code
if(num1 === 7 || num1 === 49){
    console.log("That's a lucky number!")
}

// Deliverable # 10 solution code
else if(num1 > 7 && num1 < 49){
    console.log("That might be a lucky number!")
}

// Deliverable # 11 solution code
else{
    console.log("That's not a lucky number.")
}

// Deliverable # 12 solution code
const luckyPhrase = num1 === 7 && num2 === 7 ? "Lucky Sevens!" : "Better luck next time."
console.log(luckyPhrase)