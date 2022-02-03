// ensuring to play with any case words
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("Error Message");
    }
  }
  
  // randomly generated choice of the PC
  const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
       case 0: 
         return "rock";
       case 1:
         return "paper";
       case 2:
         return "scissors";
     }
  };
  
  // a function to compare choices of the human and the PC
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "You definitely won!"
    }
    if (userChoice === computerChoice) {
      return "draw";
    } 
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "computer won";
      } else {
        return "you won";
        }
      }
    if (userChoice === "paper") {
     if (computerChoice === "scissors") {
       return "computer won!";
     } else {
       return "you won!";
       }
     }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "computer won!";
      } else {
        return "you won!";
      }
    }
  }
  
  // to play with the PC you should input the data in the argument of getUserChoice
  const playGame = () => {
     const userChoice = getUserChoice('rock');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
     };
   
  playGame();
  
  that's the final
