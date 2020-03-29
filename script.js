//questions array
var questions = [
  {
    question: 'Where in our code do we keep the styling?',
    choices: [
      'in a style.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  },
  {
    question: 'Java short for Javascript',
    choices: ['true', 'false'],
    answer: 'false'
  },
  {
    question: 'Which of these are array methods?',
    choices: [
      'push, pull, forEach, map',
      'forEach, filter, map, state',
      'push, filter, forEach, map'
    ],
    answer: 'push, filter, forEach, map'
  },
  {
    question: '______ is a Javascript library for DOM manipulation',
    choices: ['Node.js', 'JQuery', 'MySQL', 'Bootstrap'],
    answer: 'JQuery'
  },
  {
    question: 'Where in our code do we keep the styling',
    choices: [
      'in a styles.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  }
];
var Q = 0;
var correct = [];
var time = 1000;
var currentQuestion;


var startBtn = document.getElementById('start-btn');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('timer');
var endScreenEl = document.getElementById('end-screen');

function buildQuestionCard() {
  currentQuestion = questions[Q];
  console.log(currentQuestion);
  
  choicesEl.innerHTML = '';
  questionTitleEl.textContent = currentQuestion.question;


  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
  // timeEl.textContent = time;
}
function questionClick() {
  //if the answer is wrong
  if (this.value !== questions[Q].answer) {
    console.log('wrong');
    //show wrong on screen
    //subtract time
    //conditional to make sure there is still time
  } else {
    correct.push(questions[Q]);
    console.log(correct);
    //show right on the screen
    //add time
  }
  Q++;
  if(Q === questions.length) {
    //end quiz
    endQuiz();
  } else {
  buildQuestionCard();
  }
}
function endQuiz(){
  var endScreenEl = document.getElementById('end-screen');

  questionCardEl.setAttribute('class', "hide");
  endScreenEl.removeAttribute('class')
}

function startQuiz() {
  startScreenEl.setAttribute('class', 'hide');
  questionCardEl.removeAttribute('class');
  buildQuestionCard();
}
startBtn.addEventListener('click', startQuiz);



// timer


function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) %60;

  var getFormattedSeconds;
  if (secondsLeft < 10){
    formattedSeconds = 0 + secondsLeft
  }
  else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;


}

function printTime () {

  minuteDisplay.innerHTML = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
}

function startTime() {
  // question();
  console.log("this is the timer")
  printTime();
  start.setAttribute("style", "background-color : black; border-color:white;")

  if(totalSeconds >0){
    interval = setInterval(function (){
      secondsElapsed++;
      printTime();
    }, 2000)
  } 
  else {
    alert("GAME ENDED! YOU ARE OUT OF TIME!")
  }

}
startBtn.addEventListener("click", startTime);