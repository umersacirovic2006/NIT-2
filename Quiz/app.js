const QUESTIONS = [
    {
        id:1,
        question:"Koja je najveca planina na svetu?",
        answer: ["Kilimandzaro", "Kopaonik", "Fudzi", "Mont Everest", "K2"],
        correct_answer: "Mont Everest",
        points: 5,
    },
    {
        id:2,
        question:"Koliko minuta traje fudbalska utakmica?",
        answer: ["45", "60", "80", "90", "120"],
        correct_answer: "90",
        points: 5,
    },
    {
        id:3,
        question:"Gde zivi zaba?",
        answer: ["U mocvaru", "Na livadu", "Etiopija", "U pustinji", "Ne znam"],
        correct_answer: "U mocvaru",
        points: 5,
    },
    {
        id:4,
        question:"Koje godine je umro Hirahito?",
        answer: ["1979", "1990", "1984", "1976", "1989"],
        correct_answer: "1989",
        points: 5,
    },
    {
        id:5,
        question:"Koji je glavni grad Katara?",
        answer: ["Doha", "Rijad", "Kairo", "Damask", "Beograd"],
        correct_answer: "Doha",
        points: 5,
    }
]

let CURRENT_POINTS = 0
let CURRENT_INDEX = 0


const maxPoints = QUESTIONS.reduce((prev, curr) => {
    return prev + curr.points
}, 0)

const initializeQuiz = () => {
    console.log("Kviz se pokrece");

    const questionContainer = document.querySelector(".pitanje")
    const answersContainer = document.querySelector(".odgovori")
    const question = QUESTIONS[CURRENT_INDEX]
    questionContainer.textContent = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer

        button.onclick = () => {
            submitAnswer(question.id, button.textContent)
        }

        answersContainer.appendChild(button)
    })
}

const nextQuestion = () => {
    console.log("Sledece pitanje");

    const questionContainer = document.querySelector(".pitanje")
    const answersContainer = document.querySelector(".odgovori")
    answersContainer.innerHTML = ""
    const question = QUESTIONS[CURRENT_INDEX]
    questionContainer.textContent = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer

        button.onclick = () => {
            submitAnswer(question.id, button.textContent)
        }

        answersContainer.appendChild(button)
    })
}

const gameOver = () => {
    const h1 = document.querySelector(".header")
    const questionContainer = document.querySelector(".pitanje")
    const answersContainer = document.querySelector(".odgovori")

    h1.textContent = "Cestitam!!!"
    questionContainer.innerHTML = `Osvojili ste ${CURRENT_POINTS} poena!`
    answersContainer.innerHTML = ""
}


// Kada se funkcija okine, treba da prebaci na sledece pitanje
// Ukoliko je dati odgovor tacan, dodati korisniku onoliko poena koliko to pitanje nosi
// Prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan
const submitAnswer = (id, answer) => {
    const question = QUESTIONS[CURRENT_INDEX]

    if (question.id === id) {
        // Prebaci na sledece pitanje
        if (CURRENT_INDEX < 4) {
            CURRENT_INDEX++
            nextQuestion()
        } else {
            CURRENT_INDEX = 0
            gameOver()
        }
        if (question.correct_answer === answer) {
            CURRENT_POINTS += question.points
            console.log(CURRENT_POINTS);
        }
    }
}

initializeQuiz()

