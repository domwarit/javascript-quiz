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



// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
     
//     }

//   }, 1000);
// }



// setTime();

// Timer Attempt 
// function questionClick() {
//   var timerInterval = setInterval(function() {
//     secondsAdded--;
//     timeEl.textContent = secondsAdded + "Correct!";
//     if(secondsAdded === 30) {
//       addEventListener=correct.push(questions[Q]);
//       console.log(correct);
//       clearInterval(timerInterval);
//       sendMessage("Add Time");
//     } else {
//       (secondsSubtracted === -30)
//       addEventListener=incorrect.push(questions[Q]);
//       console.log(incorrect);
//       timeEl.textContent = secondSubtracted + "Incorrect!";
//       clearInterval(timerInterval);
//       sendMessage("Subtract Time");
