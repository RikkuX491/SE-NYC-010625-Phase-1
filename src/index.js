const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${food.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    // foods = getReversedArray(foods)

    foods.sort((food1, food2) => {
        if(food1.name < food2.name){
            return -1
        }
        else if(food1.name > food2.name){
            return 1
        }
        else{
            return 0
        }
    })
    console.log(foods)
    
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

// write your code here
const fruits = ["dragonfruit", "banana", "cherry", "watermelon", "apple"]

// for(let index = 1; index < fruits.length; index++){
//     console.log(fruits[index])
// }

function getReversedArray(array){

    const reversedArray = []

    // With the nested for loop - this is an example of quadratic time complexity O(n^2)
    // for(let index = array.length - 1; index >= 0; index--){
    //     const nestedArray = []
    //     for(let index = array.length - 1; index >= 0; index--){
    //         nestedArray.push(array[index])
    //     }
    //     reversedArray.push(nestedArray)
    // }

    for(let index = array.length - 1; index >= 0; index--){
        reversedArray.push(array[index])
    }

    return reversedArray
}

const reversedFruitsArray = getReversedArray(fruits)
// console.log(reversedFruitsArray)

// This is a destructive approach for how to sort an array
// fruits.sort()

// This is an approach to non-destructively sort an array of strings
const sortedFruits = [...fruits].sort()
// console.log(sortedFruits)
// console.log(fruits)

const numbers = [5, 23, 1, 67, 12, 7]
// console.log(numbers)
numbers.sort((a, b) => a - b)
// console.log(numbers)

// numbers.sort((a, b) => {
//     console.log(a)
//     console.log(b)
//     return a - b
// })

// const sortedNumbers = [...numbers].sort()

function reverseFoodName(foodName){
    // return foodName.split('').reverse().join('')
    let reversedString = ""

    for(let index = foodName.length - 1; index >= 0; index--){
        // reversedString = reversedString + foodName[index]
        reversedString += foodName[index]
    }

    return reversedString
}

// const reversedResult = reverseFoodName("hello")
// console.log(reversedResult)

const reverseButton = document.getElementById('reverse-button')
reverseButton.addEventListener('click', () => {
    const reversedResult = reverseFoodName(foodNameElement.textContent)
    foodNameElement.textContent = reversedResult
})