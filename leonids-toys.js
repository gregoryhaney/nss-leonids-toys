

const sallyWetsHerself = {
    id: 1,                      // data type: NUMBER
    name: "Sally Wets Herself", // data type: STRING
    maker: "Fisher-Price",      // data type: STRING
    color: "Salmon",            // data type: STRING
    price: 25,                  // data type: NUMBER
    looseParts: true,           // data type: BOOLEAN
    currentInventory: 3         // data type: NUMBER
}

const rockemSockemRobots = {
    id: 2,                            // data type: NUMBER
    name: "Rock Em Sock Em Robots",   // data type: STRING
    maker: "Mattel",                  // data type: STRING
    color: "Red",                     // data type: STRING
    price: 47,                        // data type: NUMBER
    looseParts: true,                 // data type: BOOLEAN
    currentInventory: 9               // data type: NUMBER
}

const liteBrite = {
    id: 3,                     // data type: NUMBER
    name: "Lite Brite",        // data type: STRING
    maker: "Hasbro",           // data type: STRING
    color: "Black",            // data type: STRING
    price: 19,                 // data type: NUMBER
    looseParts: false,         // data type: BOOLEAN
    currentInventory: 13       // data type: NUMBER
}


const toys = [
    {
        id: 1,                       // data type: NUMBER
        name: "Sally Wets Herself",  // data type: STRING
        maker: "Fisher-Price",       // data type: STRING
        color: "Salmon",             // data type: STRING
        price: 25,                   // data type: NUMBER
        looseParts: true,            // data type: BOOLEAN
        currentInventory: 3          // data type: NUMBER
    },

    {
        id: 2,                            // data type: NUMBER
        name: "Rock Em Sock Em Robots",   // data type: STRING
        maker: "Mattel",                  // data type: STRING
        color: "Red",                     // data type: STRING
        price: 47,                        // data type: NUMBER
        looseParts: true,                 // data type: BOOLEAN
        currentInventory: 9               // data type: NUMBER
    },

    {
        id: 3,                     // data type: NUMBER
        name: "Lite Brite",        // data type: STRING
        maker: "Hasbro",           // data type: STRING
        color: "Black",            // data type: STRING
        price: 19,                 // data type: NUMBER
        looseParts: false,         // data type: BOOLEAN
        currentInventory: 13       // data type: NUMBER
    }
]


console.log(toys)


// creating two new toys and adding to the "toys" array

const kenAndBarbie = {
        id: 4,                     // data type: NUMBER
        name: "Ken & Barbie",      // data type: STRING
        maker: "Mattel",           // data type: STRING
        color: "Tan",              // data type: STRING
        price: 34,                 // data type: NUMBER
        looseParts: true,          // data type: BOOLEAN
        currentInventory: 21       // data type: NUMBER 
}

const cabbagePatch = {
        id: 5,                     // data type: NUMBER
        name: "Cabbage Patch",     // data type: STRING
        maker: "Romper Room",      // data type: STRING
        color: "Red",              // data type: STRING
        price: 99,                 // data type: NUMBER
        looseParts: false,         // data type: BOOLEAN
        currentInventory: 0        // data type: NUMBER 
}

// push the two new toys (Ken & Barbie, Cabbage Patch) into the "toys" array
toys.push(kenAndBarbie)
toys.push(cabbagePatch)



// iterate through each object in the "toys" array.
// as it hits each object, display the values for 'name' and 'maker', respectively
// string interpolation is used. note the backticks and NOT SINGLE QUOTES

for (const toy of toys) {
    console.log(`The manufacturer of ${toy.name} is ${toy.maker}!`)
}


// iterate through each obj of "toys" array
// use string interpolation to ouput a sentence that describes
// each toy's name, price, color, and current inventory

for (const toy of toys) {
    console.log(`The ${toy.name} toy costs ${toy.price} dollars. We have ${toy.currentInventory} in stock and the available color is ${toy.color}.`)
}



// iterate through each obj of the "toys" array
// increase the price of each obj by 5% (.05)
// display each toy's new price

for (const toy of toys) {
    toy.price = toy.price + (toy.price * .05)
    console.log(`The revised price for ${toy.name} is $${toy.price}.`)
}


const whichToyDoYouWant = 5

for (const toy of toys) {
    if (toy.id === whichToyDoYouWant) {
        toy.price = toy.price + (toy.price * .05)
        console.log(`The revised price for ${toy.name} is $${toy.price}.`)
    }
}
