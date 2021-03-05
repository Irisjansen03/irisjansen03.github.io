

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

Let questionCounter = 0;
Let currentQuestion;
Let availableQuestions = [];
Let availableOptions = [];

// push the questions into availableQuestions Array
function setAvailableQuestions(){
  const totalQuestions = quiz.length;
  for(Let i-0; i<totalQuestion; i++){
    availableQuestions.push(quiz[i])
  }
}

// set question number and question and options
function getNewQuestion(){
  // set question number
  questionNumber.innerHTML = "Question" + (questionCounter + 1) + "of" + quiz.length;
  
  // set question text
  // get random question
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
// get the position of 'questioIndex' from the availableQuestion Array
  const index1= availableQuestions.indexOf(questionIndex);
  // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
   availableQuestions.splice(index1,1);

 // set options
  // get the length of options
  const optionLen = currentQuestion.options.length
  // push options into availableOptions Array
for(Let i=0; i<optionLen; i++){
  availableOptions.push(i)
}
  optionContainer.innerHTML = '';
  Let animationDelay = 0,15;
// create options in html
  for(Let i=0; i<optionLen; i++){
    // random option
    const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length]
    // get the position of 'optonIndex' from the availableOptions
    const index2= availableOptions.indexOf(optonIndex);
    // remove the'optonIndex' from the availableOptions, so that the option does not repeat
    availableOptions.splice(index2,1);                       
    const option =  document.createElement("div");
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = 'animationDelay' + 's';
    animationDelay = animationDelay + 0.15;
    option.className = "option"
    optionContainer.appendChild(option)
    option.setAttribute("onclick","getResult(this)");
  }
  
  questionCounter++
  }

// get the result of current attempt question
function getResult(element){
 const id = parseInt(element.id);
// get the answer by comparing the id of clicked option
  if(id === currentQuestion.answer){
    // set the green color to the correct option
   element.classList.add("correct")
  }
  else{
        // set the red color to the incorrect option
    element.classList.add("wrong")
  }
}

function next(){
 if(questionCounter === quiz.lenght){
  console.log("quiz over")
 }
  else{ 
   getNewQuestion(); 
  }
}

window.onload = function(){
  // first we will set all questions in availableQuestions Array
 setAvailableQuestions();
  // second we will call getNewQuestion(); function
  getNewQuestion();
}
