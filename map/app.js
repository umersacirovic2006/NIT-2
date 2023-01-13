// MAP

// const arr = [2, 4, 6, 8, 10, 12, 14, 16]

// const mapArr = arr.map(function(el, i){

//     if (i % 2 === 0){
//         return (el + 2) * el;
//     }
//     else {
//         return el
//     }
// })

// console.log(mapArr);

// FILTER

// const numbers = [2, 3, 10, 11, 32, 23, 44, 57, 60];

// const evenNumbers = numbers.filter(function(el, index) {
//     if(el % 2 === 0) {
//         return el;
//     }
// })

// console.log("Prije", numbers);

// console.log("Poslije", evenNumbers);

const names = [
    "Faris",
    "Nedim",
    "Esma",
    "Aisa",
    "Zein",
    "Demir",
    "Alen",
    "Demir",
    "Osman",
    "Osman",
    "Umer", // :D
    "Asmir"
]

const shortNames = names.filter(function(name, i) {
    if (name.length <= 4) {
        return name;
    }
});

console.log("Imena", names);

console.log("Kratka imena", shortNames);

const capitalA = names.filter(function(name) {
    if (name.charAt(0).toUpperCase() === "A") return name;
});

console.log("P  rvo slovo A", capitalA);

