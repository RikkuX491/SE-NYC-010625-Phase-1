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

// write your code here
// const nameElement = document.querySelector('div#food-detail h2.name')
const nameElement = document.querySelector('.name')
nameElement.textContent = burgers[0].name

// Using the createElement method() to create a new element
const h1Element = document.createElement('h1')

// Setting the textContent for this new element
h1Element.textContent = "Ice cream is the best dessert ever!"

// Using the getElementById() method to search for an element by its 'id'
const foodDetailElement = document.getElementById('food-detail')
// const foodDetailElement = document.querySelector('#food-detail')

// Using the prepend() method to add this new element inside of the #food-detail element as the first child of #food-detail
foodDetailElement.prepend(h1Element)

const h3Element = document.createElement('h3')
h3Element.textContent = "I love pizza"

// foodDetailElement.append(h3Element)
foodDetailElement.appendChild(h3Element)
// foodDetailElement.append("hello", "goodbye")

// querySelectorAll() and getElementsByClassName()
// const selectedElements = document.querySelectorAll('.detail-image')
const selectedElements = document.getElementsByClassName('detail-image')

const allDivElements = document.querySelectorAll('div')

// iterating over the NodeList stored in allDivElements variable with for...of
for(const element of allDivElements){
    console.log(element)
}

// Modifying the innerHTML attribute of an element to specify HTML that should be rendered inside of the element
// foodDetailElement.innerHTML = "<h1>I love JavaScript</h1>"

const language = "JavaScript"

// Differences between textContent, innerText, and innerHTML
// foodDetailElement.textContent = "<h1>I love\nJavaScript</h1>"
// foodDetailElement.innerHTML = "<h1>I love\nJavaScript</h1>"
// foodDetailElement.innerText = "<h1>I love\nJavaScript</h1>"

foodDetailElement.innerHTML = `<h1>I love ${language}</h1>`

const descriptionDisplayElement = document.getElementById('description-display')
descriptionDisplayElement.remove()
console.log(descriptionDisplayElement)

const newImgElement = document.createElement('img')
newImgElement.src = burgers[0].image

foodDetailElement.appendChild(newImgElement)