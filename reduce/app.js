// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sv = arr.reduce(
//     function sabiranje (prethodna, sadasnja){
//         return (prethodna += sadasnja) / arr.length;
//     }
    
// , 0);



// console.log(sv);

// const articals = [100, 100, 300, 400, 1000]

// const total = articals.reduce(function(prev, curr){
//     return prev + curr;
// }, 350)

// console.log(total);

//                  !!!!!!!!!!!!reduce can do map and filter at once!!!!!!!!!

// const numbers = [2, 3, 5, 8, 10]

// const mappedAndFiltered = numbers.reduce(function(prev, curr) {
//     const squared = curr * curr
    
//     if (squared % 2 === 0) {
//         prev.push(squared)
//     }

//     return prev;
// }, [])

// console.log(mappedAndFiltered);

//                       !!!!!!!!!!!!!!!!ARROW FUNCTION NOTATION!!!!!!!!!!!!!!!!!!!!!!!!!

            /* const sum = (a, b) => {
                return a + b;
            } */

// const sum = (a, b) => a + b;

// console.log(sum(5, 10));

//

// const velikoIme = ime => ime.toUpperCase();

// console.log(velikoIme("Umer"));

// const numbers = [2, 4, 6, 8, 10]

//arrow as callback
// const squared = numbers.map((num, i) => num * num + i)

//standard
// numbers.map(function(num, i) {
//     return num * num + i;
// })

//reverse
// const reverseText = text => text.split("").reverse().join("")

// console.log(reverseText("Umer"));

// const numbers = [2, 5, 7, 9, 10, 14, 20]

// const even = numbers.filter(num => num % 2 ===0)

// console.log(even);

// const price = +prompt("Enter your price");
// const discount = price > 1000 ? 0.2 : 0.1;
// const discountedPrice = price - price * discount;

// console.log(discountedPrice);
