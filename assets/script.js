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
    choices: ["Nicola Tesla", "Karl Benz", "Henry Ford", ""],
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

function changeScreen(screenId) {
  var screen = document.getElementById(screenId);
  screen.classList.remove("hide");
}
changeScreen("screen1");

function startGame() {
  changeScreen("screen2");
}
