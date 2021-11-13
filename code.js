let score = 0;
let questionData;
let scoreBoard;
let questionId = document.getElementById("question")
let scoreCount = document.getElementById("scoreCounter")
let category = document.getElementById("category")
let userGuess = document.getElementById(`inputId`)

function fetchData() {
    fetch(`https://jservice.kenzie.academy/api/clues`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            let clueIndex = Math.floor(Math.random() * 100)
            let answer = data.clues[clueIndex].answer
            let question = data.clues[clueIndex].question
            let categoryTitle = data.clues[clueIndex].category.title
            category.innerHTML = categoryTitle
            questionData = { answer }
            questionId.innerHTML = question
            scoreCount.innerHTML = `Score Count = ${score}`
            console.log(answer)
        })
}
fetchData()
document.querySelector(`#questionSubmit`).addEventListener("submit", (event) => {
    event.preventDefault()

    const userInput = document.querySelector("#inputId")

    console.log(event)
    if (userInput.value.toLowerCase() === questionData.answer.toLowerCase()) {
        score++;

    } else {
        score = 0
    }
    userGuess.value = ""
    questionId.innerHTML = ""
    fetchData()
})
