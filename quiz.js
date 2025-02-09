let correctAnswer = "4";
let radioButton1 = document.getElementById("choice1");

let radioButton2 = document.getElementById("choice2");

let radioButton3 = document.getElementById("choice3");

let userAnswer = [radioButton1, radioButton2, radioButton3];
function checkAnswer() {
  const feedback = document.getElementById("feedback");
  if (userAnswer[0].value === correctAnswer && userAnswer[0].checked == true) {
    feedback.textContent = "Correct! Well done.";
  } else if (
    userAnswer[1].value !== correctAnswer &&
    userAnswer[1].checked == true
  ) {
    feedback.textContent = "That's incorrect. Try again!";
  } else if (userAnswer[2].checked == true && userAnswer[2].checked == true) {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

let submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
