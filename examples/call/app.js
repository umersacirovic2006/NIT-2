// happyBday

const person = {
    name: "Umer",
    lastName: "Sacirovic",
    age: 17,
};

function happyBday() {
    return `Happy birthday ${this.name} ${this.lastName}, you are ${this.age + 1
        } now!!!`;
}

console.log(happyBday.call(person));

// addToCart

const sizes = {
    XS: ["XS", 900],
    S: ["S", 950],
    M: ["M", 1000],
    L: ["L", 1100],
    XL: ["XL", 1200],
};

function addToCart() {
    return `You added size ${this.S[0]} that costs ${this.S[1]} to your cart!`;
}

console.log(addToCart.call(sizes));

// deliverTo

const customer = {
    name: "Bilal",
    lastName: "Agovic",
    address: {
        city: "Berane",
        street: "Hareme",
        number: "69",
    },
    cart: {
        articals: { shirt: ["S", 950] },
    },
};

function deliverTo() {
    return `You've purchased item, size ${this.cart.articals.shirt[0]} and price ${this.cart.articals.shirt[1]}, to ${this.address.city}, ${this.address.street}, ${this.address.number}!`;
}

console.log(deliverTo.call(customer));