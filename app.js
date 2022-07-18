const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
        quiz:['value','estimate', 'evaluation' ],
        options:['jury', 'assess'],
        correct: 2
    },
    {
        quiz:['close','near', 'next' ],
        options:['trace', 'adjacent'],
        correct: 2
    },
    {
        quiz:['foreign','national', 'ethnic' ],
        options:['mad', 'exotic'],
        correct: 2
    },
    {
        quiz:['assume','insight', 'weather' ],
        options:['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz:['fast','quick', 'prompt' ],
        options:['charity', 'rapid'],
        correct: 2
    }
]

let score = 0
//we show the score with textContent
scoreDisplay.textContent = score

//we make appear the questions card
function populateQuestions() {
    questions.forEach(questions => {
        //we start by creating the boxes to appear with a div and add the question-box class
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        //adding our logo pen above it
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "✒"
        questionBox.append(logoDisplay)


        //we make space inside the cards to put the tip
        questions.quiz.forEach(tip => {
            //by creating a p 
            const tipText = document.createElement("p")
            //we assign the tip inside it
            tipText.textContent = tip
            //as we need to put the tip inside the question box 
            questionBox.append(tipText)
        })
        questionDisplay.append(questionBox)
    })
}

populateQuestions();