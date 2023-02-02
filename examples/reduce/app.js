//peopleCount

const people = [
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

const peopleCount = people.reduce((prev, curr) => prev + 1, 0)

console.log(peopleCount);

//highestAge

const ages = [
    10,
    20,
    17,
    18,
    33,
    40,
    6,
    37
]

const highestAge = ages.reduce((prev, curr) => {
    if (prev === null || curr > prev) {
        return curr;
    }
    return curr;
}, null)

console.log(highestAge);