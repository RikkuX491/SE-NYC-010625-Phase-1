const restaurantMenuElement = document.getElementById('restaurant-menu')
const detailImageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const descriptionDisplayElement = document.getElementById('description-display')

// Deliverable # 1 solution code goes here
function displayFoodDetails(){
    detailImageElement.src = this.image
    nameElement.textContent = this.name
    descriptionDisplayElement.textContent = this.description
}

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails.call(food)
    })

    imgElement.addEventListener('click', () => {
        imgElement.remove()
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
    })

    restaurantMenuElement.appendChild(imgElement)
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails.call(foods[0])
    // displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

// console.log(this)

function eatIceCream(iceCreamName, price){
    // console.log(this)
    // console.log(iceCreamName)
    // console.log(price)
    // console.log('ice cream eaten!')
    // console.log('Wow that was such delicious ice cream!')
    console.log(`${this.name} who is ${this.age} years old is eating ${iceCreamName}! The price was ${price}!`)
}

// eatIceCream("Strawberry ice cream", 5.99)
// eatIceCream.call({name: "Alice", age: 23}, "Strawberry ice cream", 5.99)
// eatIceCream.apply({name: "Alice", age: 23}, ["Strawberry ice cream", 5.99])
// const boundIceCreamFunction = eatIceCream.bind({name: "Alice", age: 23})

// boundIceCreamFunction("strawberry ice cream", 5.99)

// function printThis(){
//     console.log(this)   
// }

// const printThis = function (){
//     console.log(this)   
// }

const printThis = () => {
    console.log(this)   
}

// printThis()
// printThis.call("hello world")

function outerFunction(){
    console.log(this)

    const innerFunction = () => {
        console.log(this)
    }

    innerFunction()
}

// outerFunction()
// outerFunction.call(45)

const student = {
    name: "Daniel Smith",
    age: 32,
    // introduction: function (){
    //     console.log(`Hi! My name is ${this.name}. I am ${this.age} years old.`)
    // }
    introduction: () => {
        console.log(this)
        // console.log(`Hi! My name is ${this.name}. I am ${this.age} years old.`)
    }
    // introduction: function (number) {
    //     if(number <= 0){
    //         return
    //     }
    //     console.log(`Hi! My name is ${this.name}. I am ${this.age} years old.`)
    //     this.introduction(number - 1)
    // }
}

// student.introduction(10)

function createStudent(){
    console.log(this)

    const newStudent = {
        name: "Daniel Smith",
        age: 32,
        introduction: function () {
            // console.log(this)
            console.log(`Hi! My name is ${this.name}. I am ${this.age} years old.`)
        }
    }
    newStudent.introduction()
}

// createStudent.call("hello")

// const myWindow = this
// console.log(myWindow)

function anotherFunc(param1, param2){
    console.log(this)
    console.log(param1)
    console.log(param2)
}

const argumentsArray = ['apple', 'banana']

// anotherFunc.call({name: "baseball"}, argumentsArray[0], argumentsArray[1])
// anotherFunc.apply({'name': 'baseball'}, argumentsArray)

const testFunc = (param) => {
    const testFunc2 = function () {
        console.log(this)
    }
    testFunc2.call(param)
}

testFunc("hello world")