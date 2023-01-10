// var myName = "Umer"

// var numberOne = 4
// var numberTwo = 10
// var userName;

// const age = 21

// document.getElementById("myButton").onclick = function() {
//     userName = document.getElementById("myText").value
//     console.log(userName)
//     document.getElementById("p1").innerHTML = "Your Username is " + userName + "."
// }

// let city;

// city = "Novi Pazar";

// console.log(city);

// console.log("2" === 2);
// console.log(!("2" === 2));

// const UserName = prompt("Unesite vase ime")
// const UserAge = prompt("Unesite vase godine")

// console.log(UserName);

// const age = prompt("Enter your age...")
// console.log(age);

// if (age >= 18 && age < 100) {
//     document.getElementById("p1").innerHTML = "Welcome."
// }
// else if (age >= 100) {
//     document.getElementById("p1").innerHTML = "Haha.."
// }
// else if (age < 0 ) {
//     document.getElementById("p1").innerHTML = "What is your problem T-T"
// }
// else {
//     document.getElementById("p1").innerHTML = "You're too younge to understand..."
// }

// function kvadratOdPet() {
//     return 5 * 5;
// }

// const rezultat = kvadratOdPet()

// console.log(rezultat);

// function kvadratBroja(n) {
//     const result = n * n;
//     return result;
// }

// const rezultat = kvadratBroja(125)

// console.log(rezultat);

// function greeting() {
//     const userName = prompt("Enter your name:")

//     const upperCaser = userName.toUpperCase()

//     console.log("Hello", upperCaser);
// }

// greeting();

// const name = "Umer";
// const city = "Novi Pazar";
// const age = 16;
// const country = "Serbia";

// console.log(`Moje ime je ${name}, imam ${age} godina, iz ${city} sam, ${country}`);

// const fruits = ["apple", "mango", "banana","cherry", "kiwi", "peach", "raspberry"]

// function getArrayMedian(arr) {
//     if(fruits.length % 2 === 0) {
//         console.log("Error");
//     }
//     else {
//         console.log(fruits[(fruits.length / 2 + 1) - 0.5]);
//     }
    
// }

// getArrayMedian(fruits)

// console.log(fruits);

//fruits.reverse()

// const colors = ["red", "blue", "green", "orange"]

// const spojeniNiz = fruits.concat(colors)

// console.log(spojeniNiz);

// fruits.forEach(function(el, index) {

//     console.log(fruits);
// })

const ppl = ["John", "Frenk", "Marko", "Janko", "Tito", "Zika", "Pera", "Mika"]

const newArr = []

ppl.forEach(function(el, index){
    if (index % 2 === 0){
        newArr.push(el)
    }
})

console.log(newArr);

