const restaurantMenuElement = document.getElementById('restaurant-menu')
const detailImageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const descriptionDisplayElement = document.getElementById('description-display')

// Deliverable # 1 solution code
function displayFoodDetails(){
    detailImageElement.src = this.image
    nameElement.textContent = this.name
    descriptionDisplayElement.textContent = this.description
}

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        // Deliverable # 3 solution code
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
    // Deliverable # 2 solution code
    displayFoodDetails.call(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})