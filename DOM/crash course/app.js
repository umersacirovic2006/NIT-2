const usersContainer = document.querySelector(".users")
const submitBtn = document.querySelector("#submit")

let users = []

const createUserFactory = (name, lastName, occupation) => {
    return { id: Math.random().toString(36).substring(2, 10 + 2), name, lastName, occupation }
}

///////////////////////////////////////////////////////////////////////////////////

const deletedUsers = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId)
    users = [...newUsers]
}

///////////////////////////////////////////////////////////////////////////////////

const renderUsers = () => {
    users.forEach(user => {
        const userContainer = document.createElement("div")

        const userNameEl = document.createElement("p")
        const lastNameEl = document.createElement("p")
        const occupationEl = document.createElement("p")

        userContainer.appendChild(userNameEl)
        userContainer.appendChild(lastNameEl)
        userContainer.appendChild(occupationEl)

        userNameEl.textContent = `Name: ${user.name}`
        lastNameEl.textContent = `Surname: ${user.lastName}`
        occupationEl.textContent = `Occupation: ${user.occupation}`

        usersContainer.appendChild(userContainer)
    })
}

submitBtn.onclick = () => {
    let userName = document.querySelector("#name").value
    let lastName = document.querySelector("#lastName").value
    let occupation = document.querySelector("#occupation").value

    const user = createUserFactory(userName, lastName, occupation);

    console.log(users);
    if (users.length === 0) {
        users.push(user)
    }
    renderUsers()
}

submitBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastName');
    const occupationInput = document.getElementById('occupation');

    firstNameInput.value = '';
    lastNameInput.value = ""
    occupationInput.value = ""


});



// da se ocisti input
// da se ne duplira
// da se lista malo stilizuje

// just redo it but better........................