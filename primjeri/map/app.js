//addOne

const numbers = [1, 3, 6, 4, 10, 11, 20, 15, 16, 17]
const addOne = numbers.map((num, index) => num + 1)

console.log(numbers);
console.log(addOne);

//addChosen

const a = +prompt("Choose number to add")
const addChosen = numbers.map((num, index) => num + a)

console.log(addChosen);