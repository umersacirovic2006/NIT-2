// const person = {
//     name:"John",
//     lastName:"Doe",
//     getFullName: function() {
//         return `${this.name} ${this.lastName}`
//     },
//     address: {
//         city: "Mancister",
//         street: "Ulica neka",
//         number: "69",
//         getFullAddress: function() {
//             return `${person.name} zivi u ulici ${this.street} ${this.number} u gradu ${this.city}`
//         }
//     }
// }
// console.log(person.getFullName());

//call

let obj = {food: "Pizza"};

function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`
}

console.log(favFood.call(obj, "is perfect", 10));

//apply

// let obj = {
//     add: function(a, b, c) {
//         return a + b + c;
//     }
// }

// function sumItUp(a, b, c) {
//     return this.add(a, b, c)
// }

// console.log(sumItUp.apply(obj, [5, 5, 5]));

//bind

// let rectangle = {
//     getArea: function(a, b) {
//         return a * b;
//     }
// }

// function calcArea(a, b) {
//     return this.getArea(a, b)
// }

// const bindedArea = calcArea.bind(rectangle)

// console.log(bindedArea(50, 20));