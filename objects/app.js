const person = {
    // "key-value pairs"
    name: "Abdi",
    lastName: "Al nasr",
    age: 85,
    wives: ["One", "Two", "Three", "Four"],
    occupation: "Kupio NIS od Gazproma",
    address: {
        country: "Emirates",
        city: "Novi Pazar",
        street: "prvomajska",
        number: 91,
    }
}

const { name, lastName } = person
const nestoNjegovo = {
    name,
    lastName,
    occupation: "sad"
}

alert(name)

person.height = 190;

console.log(person);