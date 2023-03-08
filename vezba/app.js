// const DATA1 = [2, 26, 38, 75, 11, 29]
// const DATA2 = ["a", "b", "c", "d", "e"]

// const arrHelper = [...DATA1, ...DATA2]
// console.log("Spajanje", arrHelper);

// const secondHelper = DATA1.filter((el) => el % 2 === 0)
// console.log("Parni brojevi", secondHelper);

// secondHelper.unshift(10, 20)
// console.log("Dodavanje 10 i 20", secondHelper);

// const sqrt = DATA1.map((el, i) => {
//     if (i === [0] || i === [3] || i === [5]) {
//         return el * el
//     } else {
//         return el
//     }
// })

// console.log(sqrt);



// const dogYears = () => {
//     const nums = [2, 5, 10, 3, 4, 8]

//     let lessThanTwo = nums.map((el) => {
//         if (el > 2) {
//             if (el < 8) {
//                 return (el * 4) / 2
//             } 
//             return el * 7
//         }
//         return el
//     }).filter((el) => el < 10)
//     console.log(lessThanTwo);
// }
// dogYears()

const arr = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"]

const wordsWithE = arr.filter((el) => el[1] === "e")
console.log(wordsWithE);