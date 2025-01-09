const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// Deliverable # 1 solution code
const restaurantMenuElement = document.getElementById('restaurant-menu')
for(const burger of burgers){
    const imgElement = document.createElement('img')
    imgElement.className = 'burger'
    imgElement.src = burger.image
    restaurantMenuElement.appendChild(imgElement)
}

// Deliverable # 2 solution code
otherFoods.forEach(food => {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenuElement.appendChild(imgElement)
})

// Deliverable # 3 solution code
const detailImageElement = document.querySelector('.detail-image')
detailImageElement.src = burgers[0].image

// Deliverable # 4 solution code
const nameElement = document.querySelector('.name')
nameElement.textContent = burgers[0].name

// Deliverable # 5 solution code
const descriptionDisplayElement = document.getElementById('description-display')
descriptionDisplayElement.textContent = burgers[0].description

// Deliverable # 6 solution code
const foodImgElements = document.querySelectorAll('div#restaurant-menu img')
for(const imgElement of foodImgElements){
    imgElement.style = "border-style: solid; border-color: red; border-width: 3px"
}

// Deliverable # 7 solution code
const burgerImgElements = document.getElementsByClassName('burger')
for(const imgElement of burgerImgElements){
    imgElement.style.borderColor = "blue"
}