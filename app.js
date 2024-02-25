'use strict';

const quizData = [
    {
    question: "what is the most used javascript framework?",
    a: 'angular',
    b: 'react',
    c: "vue",
    d: "jquery",
    correct: 'b'
    },

    {
        question: "for which film tom cruise won an oscar",
        a: 'mission impossible',
        b: 'top gun',
        c: "eyes wide shut",
        d: "never won",
        correct: 'd'
        },

        {
            question: "what is the most used javascript framework?",
            a: 'angular',
            b: 'react',
            c: "vue",
            d: "jquery",
            correct: 'b'
            },

]
const quiz = document.getElementById("quiz")
const asnwerElements = document.querySelectorAll(".answer")
const questionElemnt = document.querySelector(".question")
const aEl = document.getElementById("a_text")
const bEl = document.getElementById("b_text")
const cEl = document.getElementById("c_text")
const dEl = document.getElementById("d_text")
const submitBtn = document.querySelector(".btn-sub")
let currentquiz = 0;
let score = 0;
//loadquiz()
 function loadquiz(){
   deselectAnswers()
const currentquizdata = quizData[currentquiz]

questionElemnt.innerText = currentquizdata.question
aEl.innerText = currentquizdata.a
bEl.innerText = currentquizdata.b
cEl.innerText = currentquizdata.c
dEl.innerText = currentquizdata.d
}
loadquiz()
function getslected (){

let answer = undefined
asnwerElements.forEach(asnwerElement => {
    if(asnwerElement.checked){
        answer = asnwerElement.id
    }
})
return answer
}

function deselectAnswers (){
asnwerElements.forEach(asnwerElement => {
    asnwerElement.checked = false
});
}


submitBtn.addEventListener("click", function(){
    const answer = getslected()
    if(answer){
        if(answer === quizData[currentquiz].correct){
            score++
        }
        currentquiz++
        if(currentquiz < quizData.length){
           loadquiz()
        } else{
  quiz.innerHTML = ` <h2> you answered correctly ${score}/${quizData.length} question</h2>
  <button  class="btn-sub" onclick="location.reload()">reload</button>
  `
  
        }
    }
})
