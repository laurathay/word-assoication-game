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
scoreDisplay.textContent = score