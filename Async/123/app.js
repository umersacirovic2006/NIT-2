// async function foo() {}

let users = []

const getUsers = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users")
        const data = await response.json()

        users = data.data

        console.log(users);

        const main = document.querySelector(".main")

        users.forEach(data => {
            const cardDiv = document.createElement("div")
            cardDiv.setAttribute("class", "cardDiv")

            const userAvatar = document.createElement("img")
            userAvatar.setAttribute("src", data.avatar)

            const firstName = document.createElement("p")
            firstName.textContent = data.first_name

            const lastName = document.createElement("p")
            lastName.textContent = data.last_name

            const userContact = document.createElement("p")
            userContact.textContent = data.email

            cardDiv.append(userAvatar, firstName, lastName, userContact)
            main.appendChild(cardDiv)
        });
    } catch (e) {
        console.log(e);
    } finally {
        console.log("gotovo");
    }
}

getUsers()

