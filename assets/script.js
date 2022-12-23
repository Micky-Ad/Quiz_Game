let questions = [
  {
    question: "Test 1??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 2??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 3??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 4??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 5??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 6??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 7??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 8??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 9??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 10??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 111??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
  },
  {
    question: "Test 112??",
    choices: ["abc", "efg", "hu", "djd"],
    answer: "abc",
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
