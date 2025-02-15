function checkAnswer() {
  let radioButtons = document.getElementsByName("quiz");
  let correctAnswer = "4";
  let userAnswer = null;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      userAnswer = radioButtons[i].value;
    }

    let feedback = document.getElementById("feedback");
    if (userAnswer == correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else if (userAnswer !== correctAnswer) {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
}

let submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
