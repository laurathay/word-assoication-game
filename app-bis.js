const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const question = [
{
quiz: ['value','estimate', 'evaluation' ],
options: ['jury', 'assess'],
correct 2,
},
{
    quiz: ['value','estimate', 'evaluation' ],
    options: ['jury', 'assess'],
    correct 1,
    },
]

let score = 0
scoreDisplay.textContent = score 

let clicked = []

function populateQuestions() {
    question.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('questions')

        const logodDisplay = document.createElement('div')
        logoDisplay.textContent = "-"
        questionBox.append(logodDisplay)

       question.quiz.forEach(tip => {
            const tipOptions = document.createElement('p')
            tipOptions.textContent = tip 
            questionBox.append(tip)
       })

       const questionButton = document.createElement('div')
       questionButton.classList.add('question-button')
       questionBox.append(questionButton)

       question.options.forEach(option => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer())

            questionButton.append(questionButton)
       })


        questionBox.append(quizz)
    })
}

populateQuestions()

function checkAnswer() {
    const checkAnswer = document.createElement('div')
    checkAnswer.classList.add('check-display')
}