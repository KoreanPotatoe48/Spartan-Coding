import { results, mbtis } from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEI = document.querySelector('.page-title')
const characterEI = document.querySelector('.character')
const boxEIs = document.querySelectorAll('.box')
const jobEIs = document.querySelectorAll('.job')
const lectureEI = document.querySelector('.lecture')
const lectureimgEI = document.querySelector('.lecture img')

titleEI.innerHTML = result.title
characterEI.src = result.character
boxEIs.forEach(function (boxEI, index) {
  boxEI.innerHTML = result.results[index]
}) 
jobEIs.forEach(function (jobEI, index) {
  jobEI.innerHTML = result.jobs[index]
})
lectureEI.href = result.lectureUrl
lectureimgEI.src = result.lectureImg