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
var quizResults = (correct = 0); 

var startBtn = document.getElementById('start-btn');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');

//Timer Elements
var timeEl = document.getElementById('timer');
var totalSeconds = 240 
var theTime = questions.length * 15;

//create a timerId variable = that will be blank 
var timerID;


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
  {function quizResults(){ 

  }
  }
}




function startQuiz() {
  startScreenEl.setAttribute('class', 'hide');
  questionCardEl.removeAttribute('class');
  //the blank timerID varable provide it the value of setInterval(tickfunction, 1000)
  timerID = setInterval(countdown, 1000);

  //show starting time using textContent 
  timeEl.textContent = theTime;

  buildQuestionCard();
}
startBtn.addEventListener('click', startQuiz);



// timer

function countdown(){
  //var timeEL = setInterval(function()
  
    totalSeconds--;
    timeEl.textContent= totalSeconds + "  :time remaining";

    if (totalSeconds <= 0){
      console.log("timer function has be touched")
      // clearInterval
    }
  
    
};

function sendMessage(){
  timeEl.textContent = " ";
  

}

// To save the scores()

  //get value of input box

  //make sure value wasn't empty 

  // create a variable get saved scores from the localsotrage, if there are not any previously saved - clear it 

  //format new score object for current user 

  //save to localstorage

  //redirect to next page 




//Create a seperate js file that holds the highscoe functions
//have the highscore sector in the html be hidden (till the end of the game ) : hint: eventlistener
//

//The function needs (but not limited to)

  //create a variable that will caputure the scoresfrom your localstorage

  //sort throughthe score byt score property (descending order)

  //Create a forEach that will grab the elements from the html 
  //create li tag for each high score
  //display on page


//Create a function that clears out the highscore
//using the localstorage to remove the highscore


//run the function 
