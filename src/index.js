// Deliverable # 1
const foodsArray = []

// Deliverable # 2
const burgerObject = {
    name: "Flatburger"
}

// Deliverable # 3
burgerObject.description = "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"

// Deliverable # 4
burgerObject['price'] = 14.99

// Deliverable # 5
foodsArray.push(burgerObject)

// Deliverable # 6
const burgerObject2 = {
    name: "Maple Bacon Burger",
    description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
    price: 7.99
}
foodsArray.push(burgerObject2)

// Deliverable # 7
const foodObject = {
    name: "Pizza",
    description: "Best pizza ever!",
    price: 2.75
}

const foodObject2 = {
    name: "Ice Cream",
    description: "Too delicious to be true!",
    price: 3.99
}

const foodObject3 = {
    name: "Guacamole",
    description: "Mucho spicy!",
    price: 4.99
}

foodsArray.push(foodObject, foodObject2, foodObject3)

// Deliverable # 8
for(let i = 0; i < foodsArray.length; i++){
    console.log(foodsArray[i].name)
}

// Deliverable # 9
for(const food of foodsArray){
    console.log(food.description)
}

// Deliverable # 10
foodsArray.forEach((food) => {
    console.log(food.price)
})

// Deliverable # 11
foodsArray.find((food) => {
    return food.name === "Flatburger"
})

// Deliverable # 12
foodsArray.filter((food) => {
    return food.price < 10.99
})

// Deliverable # 13
foodsArray.map((food) => {
    return food.price
})