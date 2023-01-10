const arr = [1, 2, 3, 4, 5, 6]

const newArr = arr.map(myFunction)

function myFunction(num) {
    return num * 2
}

console.log(newArr);