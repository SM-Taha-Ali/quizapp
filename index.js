const question = [
    {
        question: "What does HTML stand for?",
        option1: "Home Tool Markup Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyper Tool for Machine Learning",
        option4: "None of these",
        correctAns: "Home Tool Markup Language"
    },
    {
        question: "What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Cascade Style Sheets",
        option3: "Covered Style Sheets",
        option4: "None of these",
        correctAns: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        option1: "Javascript",
        option2: "Javasharp",
        option3: "Javathon",
        option4: "None of these",
        correctAns: "Javascript"
    },
    {
        question: "What does MERN stand for?",
        option1: "Mongo DB Express React Node",
        option2: "Manchester Express React Next",
        option3: "Max Express Run Node",
        option4: "None of these",
        correctAns: "Mongo DB Express React Node"
    },
    {
        question: "What does MEAN stand for",
        option1: "Mongo DB Express Angular Node",
        option2: "Manchester Express Anglifile Next",
        option3: "Max Express And Node",
        option4: "None of these",
        correctAns: "Mongo DB Express Angular Node"
    },
]

var index = 0;

var questCont = document.getElementById("quesCont")
var questionBlock = document.getElementById("questionBlock")
var resultContainer = document.getElementById("rc")
var pgbar = document.getElementById("pgbar");
var currentQuestion = document.getElementById("currentQuestion")
var totalQuestion = document.getElementById("totalQuestion")
var marks = document.getElementById("marks")
var remarks = document.getElementById("remarks")
var score = 0

totalQuestion.innerHTML = question.length;


function nextQuestion(ans) {
    if (index <= question.length-1){
        index++
        if (ans.innerHTML == question[index-1].correctAns){
            score++
            marks.innerHTML = ((score/question.length)*100)+"%"
        }
    }
    if (index < question.length) {
        showQuestion(index);
    } else {
        questionBlock.style.display = "none";
        resultContainer.style.display = "block";
    }
    
}

function showQuestion(i) {
    // console.log(index + "showquestion wala")
    questCont.innerHTML = `
        <div class="question rounded shadow my-4 p-4 fs-5">${question[i].question}</div>
        <div class="options">
            <div class="row py-2">
                <div class="col-6">
                    <button class="btn default-btn" onclick="nextQuestion(this)">${question[i].option1}</button>
                </div>
                <div class="col-6">
                    <button class="btn default-btn" onclick="nextQuestion(this)">${question[i].option2}</button>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-6">
                    <button class="btn default-btn" onclick="nextQuestion(this)">${question[i].option3}</button>
                </div>
                <div class="col-6">
                    <button class="btn default-btn" onclick="nextQuestion(this)">${question[i].option4}</button>
                </div>
            </div>
        </div>
        <div class="d-block text-end py-3">
                <button class="btn btn-info" onclick="nextQuestion(this)" id="nextBtn">${i == question.length - 1 ? "Submit" : "Next"}</button>
        </div>
        <div class="progress fixed-bottom" id="p">
            <div class="progress-bar bg-default" role="progressbar" style="width: ${((i + 1) / question.length) * 100}%" aria-valuenow="${i}"
                aria-valuemin="0" aria-valuemax="${question.length}"></div>
        </div>
       `
    currentQuestion.innerHTML = i + 1
}

showQuestion(index)

var nextBtn = document.getElementById("nextBtn")

var lol = document.getElementById("lol")

function check(){
    console.log(score)
    console.log(question.length)
}
