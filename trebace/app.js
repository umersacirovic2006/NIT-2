names = [
    "Dzenis Hocanin",
    "Umer Sacirovic",
    "Osman Pulic",
    "Alen Kalac"
]

const initials = names.map(function(name, i) {
    const splitted = name.split(" ")
    const nameInitial = splitted[0].charAt(0)
    const lastNameInitial = splitted[1].charAt(0)
    return nameInitial + lastNameInitial
})

console.log(initials);