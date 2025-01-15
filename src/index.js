const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    const foodDetailImageElement = document.querySelector('.detail-image')
    foodDetailImageElement.src = food.image

    const foodNameElement = document.querySelector('.name')
    foodNameElement.textContent = food.name

    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

function handleSubmit(event){
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    // Deliverable # 1 solution code
    // addFoodImageToRestaurantMenu(newFood)
    // fetch('http://localhost:3000/foods', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newFood)
    // })

    // Deliverable # 2 solution code
    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newFood)
    })
    .then(response => response.json())
    .then(newFoodData => addFoodImageToRestaurantMenu(newFoodData))

    event.target.reset()
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', handleSubmit)