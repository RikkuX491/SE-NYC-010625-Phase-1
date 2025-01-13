// write your code here

// const promiseObject = fetch('http://localhost:3000/foods')
// console.log(promiseObject)

// const promiseObject2 = promiseObject.then((response) => {
//     response.json().then(foods => console.log(foods))
// })

// const promiseObject2 = promiseObject.then(response => response.json())
// console.log(promiseObject2)

// promiseObject2.then(foods => {
//     console.log(foods)
// })

// const returnValue = fetch('http://localhost:3000/foods').then(response => response.json()).then(foods => foods[0]).then(firstFood => {
//     return "I'm hungry!"
// }).then((phrase => {
    
// })).then((something) => {
//     return "here's something else!"
// })
// console.log(returnValue)

// async function getFoods(){
//     console.log('Before the fetch() code')

//     const responseObject = await fetch('http://localhost:3000/foods')
//     const data = await responseObject.json()
//     console.log(data)

//     console.log('After the fetch() code')
// }

// getFoods()

function addFoodImageToRestaurantMenu(food){
    // console.log(food)
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    const restaurantMenu = document.getElementById('restaurant-menu')
    restaurantMenu.appendChild(imgElement)

    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

function displayFoodDetails(food){
    // console.log(food)
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image

    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name

    const descriptionDisplay = document.getElementById('description-display')
    descriptionDisplay.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    // foods.forEach(food => {
    //     addFoodImageToRestaurantMenu(food)
    // })
    
    foods.forEach(addFoodImageToRestaurantMenu)

    displayFoodDetails(foods[0])
})