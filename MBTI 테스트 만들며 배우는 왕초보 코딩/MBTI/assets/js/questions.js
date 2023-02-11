import { questions } from './data.js'

const progressValueEI = document.querySelector('.progress .value')
const numberEI = document.querySelector('.number')
const questionEI = document.querySelector('.question')
const choice1EI = document.querySelector('.choice1')
const choice2EI = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber]
  numberEI.innerHTML = question.number
  questionEI.innerHTML = question.question
  choice1EI.innerHTML = question.choices[0].text
  choice2EI.innerHTML = question.choices[1].text
  progressValueEI.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length -1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() {
  location.href = './results.html?mbti=' + mbti //쿼리스트링
}

choice1EI.addEventListener('click', function () {
  nextQuestion(0)
})
choice2EI.addEventListener('click', function () {
  nextQuestion(1)
})

renderQuestion()