const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')
const newNameInputElement = document.getElementById('new-name')
const newImageInputElement = document.getElementById('new-image')
const newDescriptionInputElement = document.getElementById('new-description')

let currentlyDisplayedFoodId

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)

    imgElement.addEventListener('click', () => {
        // Optimistic rendering for DELETE request
        // imgElement.remove()
        // fetch(`http://localhost:3000/foods/${food.id}`, {
        //     method: "DELETE"
        // })

        // Pessimistic rendering for DELETE request
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
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description

    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = food.number_in_cart

    currentlyDisplayedFoodId = food.id
}

function addNewFood(event){
    event.preventDefault()

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({...newFood, number_in_cart: 0})
    })
    .then(response => {
        if(response.ok){
            response.json().then(newFoodData => {
                addFoodImageToRestaurantMenu(newFoodData)
            })
        }
        else{
            alert("Error: Unable to add new food!")
        }
    })

    event.target.reset()
}

function addToCart(event){
    event.preventDefault()

    const numberToAddInputElement = document.getElementById('number-to-add')
    const numberInCartCountElement = document.getElementById('number-in-cart-count')

    const sum = Number(numberInCartCountElement.textContent) + Number(numberToAddInputElement.value)

    // Optimistic rendering for PATCH request
    // numberInCartCountElement.textContent = sum
    // fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         number_in_cart: sum
    //     })
    // })

    // Pessimistic rendering for PATCH request
    fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            number_in_cart: sum
        })
    })
    .then(response => {
        if(response.ok){
            response.json().then(updatedFood => {
                numberInCartCountElement.textContent = updatedFood.number_in_cart
            })
        }
        else{
            alert(`Error: Unable to add to cart for Food # ${currentlyDisplayedFoodId}!`)
        }
    })

    event.target.reset()
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', addNewFood)

const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', addToCart)