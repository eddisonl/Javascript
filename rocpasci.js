let score = JSON.parse(localStorage.getItem('score'))|| {
  Win:0,
  lose:0,
  Tie:0
};


// shortcut above

// if(score === null){
//   score = {
//     Win:0,
//     lose:0,
//     Tie:0
//   };
// }

// Code format using if and else if in a function to activate and caluclate the possibilty of choosing something at random.
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  result = "";
  if (playerMove === "scissors") {
    if (computerMove === "Rock") {
      result = "lose";
    } else if (computerMove === "Paper") {
      result = "Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Rock") {
      result = "Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "Lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "Lose";
    } else if (computerMove === "Scissors") {
      result = "Win";
    }
  }

  // if outcomes are accumulated based on number of times played, this shows the final reslut on how many times a win, lose and Tie ocuured all together.
  if (result === "Win") {
    // score.Win === score.Win + 1; {or use the shortcut below}
    score.Win += 1;
  } else if (result === "lose") {
    score.Lose += 1;
  } else if (result === "Tie") {
    score.Tie += 1;
  }

  localStorage.setItem('score' , JSON.stringify(score));

  // results finalized using functions written outside and inside the curly bracket.
  alert(
    `You picked ${playerMove}, Computer picked ${computerMove} \n You ${result} !
  Win : ${score.Win} , Lose : ${score.Lose} , Tie : ${score.Tie}`
  );
}

let computerMove = "";

// using math random to select and partition numbers into 3 parts, creating a possibilty index
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber >= 0) {
    computerMove = "Scissors";
  }
  console.log(computerMove);

  return computerMove;
}

