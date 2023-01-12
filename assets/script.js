let questions = [
  {
    question: "Where were the first modern Olympics held?",
    choices: [
      "Rome, Italy 1910",
      "London, England 1890",
      "Paris, France 1922",
      "Athens, Greece 1896",
    ],
    answer: "Athens, Greece 1896",
  },
  {
    question: "In what year did Nelson Mandela get released from prison?",
    choices: ["1999", "1985", "1995", "1990"],
    answer: "1990",
  },
  {
    question:
      "Who became President of the United States after John F. Kennedy was assassinated?",
    choices: [
      "Richard Nixon",
      "Lyndon B. Johnson",
      "jimmy carter",
      "Gerald R. Ford",
    ],
    answer: "Lyndon B. Johnson",
  },
  {
    question: "Who built the first car in America?",
    choices: ["Nicola Tesla", "Karl Benz", "Henry Ford", "Carl Mark"],
    answer: "Henry Ford",
  },
  {
    question: "What is the name of the first human civilization?",
    choices: ["Mesopotamia", "Ancient Egypt", "Ancient India", "Ancient China"],
    answer: "Mesopotamia",
  },
  {
    question: "Which team won the first Super Bowl?",
    choices: ["Patriots", "GreenBay Packers", "Raiders", "Rams"],
    answer: "GreenBay Packers",
  },
  {
    question: "How many times has the Mona Lisa been stolen?",
    choices: ["one", "two", "zero", "three"],
    answer: "one",
  },
  {
    question: "Who was the first black Senator in the United States?",
    choices: [
      "Thurgood Marshall",
      "Carol Moseley Brown",
      "Martin Luther king jr",
      "Malcom X",
    ],
    answer: "Carol Moseley Brown",
  },
  {
    question: "What is the longest war in U.S. history?",
    choices: ["Vietnam War", "Afghan War", " Korean War", " Civil War"],
    answer: "Afghan War",
  },
  {
    question:
      " In the 5,000 years of human history, what is the one disease that has been completely eradicated?",
    choices: ["Measles", "Tetanus", "Small Pox", "Polio"],
    answer: "Small Pox",
  },
  {
    question: "In what year did humans put the first satellite into orbit?",
    choices: ["1952", "1957", "1962", "1967"],
    answer: "1957",
  },
  {
    question: " When was the television invented?",
    choices: ["1917", "1927", "1937", "1947"],
    answer: "1927",
  },
];

var points = 0;
var currentQuestion = 0;
var rightWrongInterval = null;
var time = 60;
var timeInterval = null;

questions.sort(() => Math.random() - 0.5);

function loadQuestion(index) {
  var question = questions[index];
  clearTimeout(rightWrongInterval);
  if (question == undefined) {
    changeScreen("screen3");
    document.getElementById("totalScore").innerHTML = points;
    clearInterval(timeInterval);
  } else {
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice1").innerHTML = question.choices[0];
    document.getElementById("choice2").innerHTML = question.choices[1];
    document.getElementById("choice3").innerHTML = question.choices[2];
    document.getElementById("choice4").innerHTML = question.choices[3];
    currentQuestion = index;
  }
}

// checking answers
function checkAnswer() {
  var target = event.target;
  var value = target.innerHTML;
  var question = questions[currentQuestion];
  if (value == question.answer) {
    points++;
    document.getElementById("rightWrong").innerHTML = "Right";
  } else {
    time = time - 5;
    document.getElementById("rightWrong").innerHTML = "Wrong";
  }

  rightWrongInterval = setTimeout(function () {
    clearTimeout(rightWrongInterval);
    document.getElementById("rightWrong").innerHTML = "";
    loadQuestion(currentQuestion + 1);
  }, 500);
}

function changeScreen(screenId) {
  var allScreens = document.getElementsByClassName("screen");
  for (let i = 0; i < allScreens.length; i++) {
    allScreens[i].classList.add("hide");
  }
  var screen = document.getElementById(screenId);
  screen.classList.remove("hide");
}
// Displaying the welcome page - Game Title and Prompt user to start
changeScreen("screen1");

// Start game with question displayed on screen 2
function startGame() {
  changeScreen("screen2");
  loadQuestion(0);
  startTimer();
}

// local storage for user name
function saveInitial() {
  event.preventDefault();
  var newResult = [];
  var userName = document.getElementById("userName").value;
  //for local storage key value pair
  var result = {
    name: userName,
    points: points,
  };
  var oldResults = localStorage.getItem("quiz");
  if (oldResults == null) {
    newResult.push(result);
    localStorage.setItem("quiz", JSON.stringify(newResult));
  } else {
    oldResults = JSON.parse(oldResults);
    console.log(oldResults);
    oldResults.push(result);
    localStorage.setItem("quiz", JSON.stringify(oldResults));
  }
  resetGame();
}

// Local storage for highscore
function showHighScore() {
  changeScreen("screen4");
  document.getElementById("high-score").innerHTML = "";
  var scores = localStorage.getItem("quiz");
  if (scores == null) {
    document.getElementById("high-score").innerHTML =
      "<p class='margin-bottom-20'> No Score found </p>";
  } else {
    scores = JSON.parse(scores);
    //sort highscore display
    scores.sort((a, b) =>
      a.points < b.points ? 1 : b.points < a.points ? -1 : 0
    );
    var layouts = "";
    scores.forEach((score) => {
      layouts =
        layouts +
        `<p class='margin-bottom-20'> ${score.name} scored ${score.points} </p>`;
    });
    document.getElementById("high-score").innerHTML = layouts;
  }
}

// Reset game with screen1 and values for points,Current Question and time
function resetGame() {
  points = 0;
  currentQuestion = 0;
  time = 60;
  changeScreen("screen1");
}

// Timer function
function startTimer() {
  timeInterval = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(timeInterval);
      changeScreen("screen3");
      document.getElementById("totalScore").innerHTML = points;
    }
    document.getElementById("timer").innerHTML = `Time Left: ${time}`;
  }, 1000);
}
