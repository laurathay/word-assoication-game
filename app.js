const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
        quiz: ['value','estimate', 'evaluation' ],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close','near', 'next' ],
        options: ['trace', 'adjacent'],
        correct: 2
    },
    {
        quiz: ['foreign','national', 'ethnic' ],
        options: ['mad', 'exotic'],
        correct: 2
    },
    {
        quiz: ['assume','insight', 'weather' ],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast','quick', 'prompt' ],
        options: ['charity', 'rapid'],
        correct: 2
    }
]

let score = 0
let clicked = []

//we show the score with textContent
scoreDisplay.textContent = score

//we make appear the questions card
function populateQuestions() {
    //get my array and for each item that I call question :
    questions.forEach(question => {
        //we start by creating the boxes to appear with a div and add the question-box class
        const questionBox = document.createElement('div')
        //we are adding the class question-box to the div we just created
        questionBox.classList.add('question-box')

        //adding our logo pen above it
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "✒"
        questionBox.append(logoDisplay)


        //we make space inside the cards to put the tip
        question.quiz.forEach(tip => {
            //by creating a p 
            const tipText = document.createElement("p")
            //we assign the tip inside it
            tipText.textContent = tip
            //as we need to put the tip inside the question box 
            questionBox.append(tipText)
        })

        // we put the button inside the box 
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        //we do a forEach button for every questions
        question.options.forEach((option, optionIndex) => {
            //on creer le bouton
            const questionButton = document.createElement('button')
            //on lui attribut la class question-button
            questionButton.classList.add('question-button')
            //on relie le texte des option
            questionButton.textContent = option
        
            //on ajoute un evenement au bouton pour verifier la reponse
            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct))
        

            questionButtons.append(questionButton)
        })

        //pour savoir si on a bon ou pas a la réponse
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    }) 
}

populateQuestions()

function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        // les '' c'est pour indiquer la classe qui correspond
        addResult(questionBox, "Correct!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "Wrong!", 'wrong')
    }
    //on a mis un array vide du coup il enregistre la question dans l'array
    clicked.push(option)
    //le bouton est dasctivé quand on clique dessus 
    questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
    //selectionne la classe dans la questionBox
    const answerDisplay = questionBox.querySelector('.answer-display')
    //eneleve la classe wrong 
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    //met la bonne classe selon la correction
    answerDisplay.classList.add(className)
    //affiche la reponse dans cette classe
    answerDisplay.textContent = answer
}