const quizdata = [
  {
  
 question: "who the academy award for best actress in 2022?",
  a: "jessica chastain",
  b: "krsiten stewart",
  c: "olivia colman",
  correct: "a",
     }, 
     {
     question: " who album of the year in 2017?",
     a: "adele",
     b: "beyonce",
     c: "drake",
     correct: "a",
        },

 {
     question: "the best selling album of all time ?",
     a: "the bodyguard",
     b: "thriller",
     c: "the beatls",
     correct: "b",
        }
]
const quiz = document.getElementById("quiz")
const answerels =document.querySelectorAll(".answer")
const questions = document.getElementById("question")
 const atext = document.getElementById("a-text")
 const btext = document.getElementById("b-text")
 const ctext = document.getElementById("c-text")
 const sumbit = document.querySelector(".sumbit")
let currentquiz = 0;
let score = 0
loadquiz()

function loadquiz() {
deselectanswers()
const currentquizdata = quizdata[currentquiz]
questions.innerText = currentquizdata.question;
atext.innerText = currentquizdata.a;
btext.innerText = currentquizdata.b;
ctext.innerText = currentquizdata.c;
}
function getselected () {
  let answer = undefined;
  answerels.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id
    }
  })
  return answer;
}
function deselectanswers() {
  answerels.forEach((answerel) =>{
    answerel.checked = false
  })
}

sumbit.addEventListener("click",() =>{
const answer = getselected()

if (answer) {
if (answer === quizdata[currentquiz].correct) {
 score++;
}
currentquiz++
if (currentquiz< quizdata.length) {
  loadquiz()
} else {
  quiz.innerHTML = `<h2>you answre correctly at ${score}/${quizdata.length} qestions.</h2>
  <button class="reload" onclick="location.reload()">reload</button>`;
}
}

})