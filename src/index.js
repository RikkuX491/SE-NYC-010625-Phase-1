// const studentName = "Alice Baker"
let studentName = "Alice Baker"
studentName = "Bob Carris"

// const studentName = "hello"

// console.log('Hello ' + studentName + '! JavaScript is so much fun! Python is a lot of fun too!')
// console.log(`Hello ${studentName}! JavaScript is so much fun! Python is a lot of fun too!`)

// The studentName variable contains the name of a student!
// console.log(studentName)

// debugger;

let food = "Pizza"
// console.log(food)

// debugger;

food = "banana"
// console.log(food)

// debugger;

// let food = "Apple"

// console.log("yo what's up")

let number = 5
// console.log(number)

let luckyNumber = '7'
// console.log(luckyNumber)

// console.log(number + luckyNumber)

// console.log(typeof number)
// console.log(typeof luckyNumber)

let isStudent = true
// console.log(isStudent)
// console.log(typeof isStudent)

const anotherNumber = 10
// console.log(anotherNumber)
// console.log(typeof anotherNumber)

const stringNumber = String(anotherNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

const word = "hello"
// console.log(word)
// console.log(typeof word)

const numberWord = Number(word)
// console.log(numberWord)
// console.log(typeof numberWord)
// console.log(isNaN(numberWord))
// console.log(Number('34.5'))
// console.log(parseInt('34.5'))
// console.log(parseFloat('34.5'))

// console.log(Number(''))
// console.log(parseFloat(''))

// console.log(parseInt('10', 3))

// console.log(Boolean('hello'))
// console.log(!!'hello')

// console.log(4 % 3)

// console.log(4 === 6)
// console.log(4 !== 6)
// console.log(4 === '4')
// console.log(4 == '4')
// console.log(4 != '4')

// console.log(4 > 2)
// console.log(4 < 2)

// console.log(studentName === 'Alice Baker')

if(studentName === 'Bob Carris'){
    // console.log("Hi Bob!")
}
else if(isStudent === true){
    // console.log("Welcome to Flatiron School!")
}
else{
    // console.log('Hello World!')
}

// const phrase = studentName === 'Bob Carris' ? "Hi Bob!" : (isStudent === true ? "Welcome to Flatiron School!" : 'Hello World!')
// console.log(phrase)

const phrase = studentName === 'Bob Carris' ? "Hi Bob!" : 'Hello World!'
// const phrase = studentName === 'Bob Carris' ? "Hi Bob!" : function () {return 77}
// console.log(phrase)

// switch(studentName){
//     case "Alice Baker":
//         console.log('Greetings Alice!')
//         break
//     case "Bob Carris":
//         console.log("Hi Bob!")
//         break
//     default:
//         console.log('Hello World!')
// }

switch(true){
    case studentName === "Alice Baker":
        console.log('Greeting Alice!')
        break
    case isStudent === true:
        console.log("Welcome to Flatiron School!")
        break
    default:
        console.log("Good night!")
}

// console.log(3 === 3 && 'hello' === 'hello')
// console.log(3 && 'hello')
// console.log(0 && 'hello')

// console.log(0 || 'hello')
// console.log(7 || 'hello')
// console.log('' || 0)

if('' || 0){
    console.log('hello world')
}
else{
    console.log('goodbye world')
}