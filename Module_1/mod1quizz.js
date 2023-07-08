const questions = [
    {
        question : "Your friends came over to your house for a movie night. One of your friends brought another friend so there are more people than you planned for. You want to pass out the drinks but you only have five cans of soda and you need 6 for everyone to have one. What could you do?",
        answers : [
            {
                text : "Ask your friends if anyone is willing to share a drink with someone else", correct: false
            },
            {
                text : "Offer water or another non-alcoholic beverage to the person who doesn't have a soda.", correct: false
            },
            {
                text : "Go to the nearest store and buy another can of soda.", correct: true
            },
            {
                text : "Cut the cans of soda in half so that there are enough portions for everyone", correct: false
            },

        ]
    },
    {
        question : "An adult you didn't know came on to the playground and asked if you would help look for his lost dog. What would you do? ",
        answers : [
            {
                text : "Agree to help the adult look for the lost dog.", correct: false
            },
            {
                text : "Find a trusted adult nearby and inform them about the situation.", correct: true
            },
            {
                text : "Politely decline and explain that you need to ask a trusted adult for permission first.", correct: false
            },
            {
                text : "Walk away from the adult and avoid engaging with them.", correct: false
            },

        ]
    },
    {
        question : "You find a wallet on the ground with money and identification inside. What should you do?",
        answers : [
            {
                text : "Keep the money and return the wallet.", correct: false
            },
            {
                text : "Take the money and throw away the wallet.", correct: false
            },
            {
                text : "Leave the wallet where you found it.", correct: false
            },
            {
                text : "Take the wallet and report it to a trusted adult or authority figure.", correct: true
            },

        ]
    },
    {
        question : "You and your friends are planning a fundraising event for a local charity. How can you maximize the impact of your event?",
        answers : [
            {
                text : "Set an exorbitant entry fee to collect more money.", correct: false
            },
            {
                text : "Reach out to local businesses for sponsorship or donations.", correct: true
            },
            {
                text : "Keep the event small and invite only close friends and family.", correct: false
            },
            {
                text : "Put minimal effort into organizing the event and hope for the best.", correct: false
            },

        ]
    },
    {
        question : "You are trying to solve a complex math problem, but you're stuck. What is the best approach to finding a solution?",
        answers : [
            {
                text : "Give up and accept that you can't solve the problem.", correct: false
            },
            {
                text : "Copy the answer from a classmate without understanding the process.", correct: false
            },
            {
                text : "Seek help from the teacher or a classmate to gain different perspectives.", correct: true
            },
            {
                text : "Pretend to solve the problem by making up random numbers.", correct: false
            },

        ]
    },
    {
        question : "You are working on a group project, and one team member consistently dominates the discussions and decision-making. How should you address this issue?",
        answers : [
            {
                text : "Let the team member continue taking charge to ensure efficiency.", correct: false
            },
            {
                text : "Discuss the issue with other team members and find a diplomatic way to approach the dominant member.", correct: true
            },
            {
                text : "Confront the dominant team member and challenge their authority.", correct: false
            },
            {
                text : "Exclude the dominant team member from the project to avoid conflicts.", correct: false
            },

        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML  = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removechild(answerButton.firstChild);
    }
}
startQuiz();