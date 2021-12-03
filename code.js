// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.


let score = 0;
let questionData;
let scoreBoard;
let questionId = document.getElementById("question")
let scoreCount = document.getElementById("scoreCounter")
let category = document.getElementById("category")
let userGuess = document.getElementById(`inputId`)
let randomCategory;
let message = document.querySelector(`.message`)


function randomClue () {
    fetch(`https://jservice.kenzie.academy/api/random-clue`)
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
    randomCategory = data.categoryId
fetchData()
    })
}
randomClue()

function fetchData() {
    fetch(`https://jservice.kenzie.academy/api/clues?category=${randomCategory}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        


            let clueIndex = Math.floor(Math.random() * data.clues.length)
            let answer = data.clues[clueIndex].answer
            let question = data.clues[clueIndex].question
            let categoryTitle = data.clues[clueIndex].category.title
            category.innerHTML = categoryTitle
            questionData = { answer }
            questionId.innerHTML = question
            scoreCount.innerHTML = `light Absorbed: ${score}`
            console.log(answer)
        })
}


document.querySelector(`#questionSubmit`).addEventListener("submit", (event) => {
    event.preventDefault()
    const userInput = document.querySelector("#inputId")
    console.log(event)
    if (userInput.value.toLowerCase() === questionData.answer.toLowerCase()) {
        score++;
        message.innerHTML = "shiny"
        fetchData()
    } else {
        score = 0
        message.innerHTML = "the darkness comes"
        randomClue()
    }
    userGuess.value = ""
    questionId.innerHTML = ""
})
