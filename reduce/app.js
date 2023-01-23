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

const numbers = [2, 3, 5, 8, 10]

const mappedAndFiltered = numbers.reduce(function(prev, curr) {
    const squared = curr * curr
    
    if (squared % 2 === 0) {
        prev.push(squared)
    }

    return prev;
}, [])

console.log(mappedAndFiltered);