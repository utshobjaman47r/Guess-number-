'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/





// console.log(document.querySelector(".message"))


/*console.log(document.querySelector(".message").textContent)

// document.querySelector(".message").textContent = "what is the number"


console.log(document.querySelector(".message"))

document.querySelector('.message').textContent = "the number"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


 console.log(document.querySelector('.guess').value)

 document.querySelector('.guess').value = 20;
 */

//  document.querySelector('.check').addEventListener('click', function(){
//   const guss = document.querySelector(".guess").value
//     console.log( typeof guss)
// })
 
 
//  document.querySelector('.guess').value = 23;


//  const scrctNumber =  Math.trunc(Math.random()*20)+1
//  document.querySelector('.number').textContent = scrctNumber
//  let score = 20;
//   document.querySelector('.check').addEventListener('click', function() {
//    const guss = Number(document.querySelector(".guess").value)
//    console.log(guss, typeof guss)
//    if (!guss) {
//      document.querySelector('.message').textContent = "no number🤦‍♂️"
    
//   }else if(guss === scrctNumber){
//      document.querySelector(".message").textContent = "correct number 💡"


//    }else if(guss>scrctNumber){
//     if (score > 0) {
//        document.querySelector(".message").textContent = "the number is too high "
//      score--
//     document.querySelector('.score').textContent= score;

//      }else{
//        document.querySelector('.message').textContent="you loose the game"
//      }
    
    

//    }else if(guss<scrctNumber){
//      document.querySelector(".message").textContent ="the number is too low"
//      score--

//   }
  
//  })


//  document.querySelector('.message').textContent = "correct number 🔑"

//  document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent= 10;



// document.querySelector('.message').textContent = "the corrct number 🐧 "

// document.querySelector(".number").textContent = 13

// document.querySelector(".score").textContent = 10




// document.querySelector('.guess').value = 23
// console.log(document.querySelector(".guess").value)


// document.querySelector(".check").addEventListener(".click",function(){
//   console.log(document.querySelector('.guess').value);
// });

// document.querySelector(".check").addEventListener("click", function() { // Removed the extra dot from ".click"
//   console.log(document.querySelector('.guess').value);
// });




// section 1 

// const serctNumber = Math.trunc(Math.random()*20)+1
// let score = 20 ; 

// document.querySelector(".number").textContent = serctNumber
// document.querySelector('.check').addEventListener('click', function() {

//   const guss = Number( document.querySelector('.guess').value);

//   console.log( guss ,typeof guss)
//   if(!guss){
//     document.querySelector('.message').textContent = "no  number ☹️"

//   }else if (guss === serctNumber){
//     document.querySelector(".message").textContent = "correct number ☄️ "
//   }else if (guss > serctNumber){
//     if(score > 1 ) {
//       document.querySelector('.message').textContent = "the number  is too hingh "
//       score = score - 1  
//       document.querySelector('.score').textContent = score
//     }else{
//       document.querySelector(".message").textContent = "you lost the game ⛈️";
//       document.querySelector('.score').textContent = 0;

//     }
   
//   }else if (guss < serctNumber){
//     if(score > 1 ) {
//       document.querySelector('.message').textContent = "the number is too low 🐏 "
//       score = score - 1  
//       document.querySelector('.score').textContent = score
//     }else{
//       document.querySelector(".message").textContent = "you lost the game ⛈️";
//       document.querySelector('.score').textContent = 0;

//     }
    

//   }
 
  
// })





// section2 
let secretNumber = Math.trunc(Math.random()*20) + 1  
// document.querySelector('.number').textContent = secretNumber
let score =  20;
let highscore = 0;
const displayMessage  =  function(message){
  document.querySelector('.message').textContent = message

}


document.querySelector('.check').addEventListener('click', function(){
  const guess  = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess)
  // when there is no input 
  if(!guess){
    // document.querySelector('.message').textContent = "no number ☹️"
    displayMessage("no number ☹️")
  }else if (guess === secretNumber){
    //  document.querySelector('.message').textContent = "correct number 🌏 "
     displayMessage("correct number 🌏 ")
    // displayMessage("correct number")
     document.querySelector('.number').textContent = secretNumber;
    //displayMessage( secretNumber )
    document.querySelector('body').style.backgroundColor = "#60b347"
    document.querySelector('.number').style.width ="30rem" 

    if (score > highscore){
      highscore = score;
       document.querySelector(".highscore").textContent = highscore;
      // displayMessage(highscore);
    }
   


   
    // when the number is wrong 
  }else if (guess !== secretNumber){
    if(score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? " too high 🌠" : "too  is low 🐏"
      displayMessage(guess > secretNumber ? " too high 🌠" : "too  is low 🐏")
      score = score - 1 ;
       document.querySelector('.score').textContent = score;
      //displayMessage(score)
    }else {
      //document.querySelector('.message').textContent ="you lost the game 🍂 " 
      displayMessage("you lost the game 🍂 " )
      document.querySelector('.score').textContent = 0; 
    }

  }
  //  when the guess is too hingh   
//   else if(guess > secretNumber){
//     if(score > 1) {
//       document.querySelector('.message').textContent ="the number is too high 🌠" 
//       score = score - 1 ;
//       document.querySelector('.score').textContent = score;
//     }else {
//       document.querySelector('.message').textContent ="you lost the game 🍂 " 
//       document.querySelector('.score').textContent = 0; 
//     }
// // the guess is too low 

//   }else if (guess <secretNumber){
//     if(score > 1) {
//       document.querySelector('.message').textContent ="the number is too low 🐏" 
//       score = score - 1 ;
//       document.querySelector('.score').textContent = score;
//     }else {
//       document.querySelector('.message').textContent ="you lost the game 🍂 " 
//       document.querySelector('.score').textContent = 0; 
//     }
    
    


//   }

})


document.querySelector('.again').addEventListener('click',function(){


  score = 20; 
  secretNumber = Math.trunc(Math.random()*20) + 1  
  // document.querySelector('.message').textContent ="start guessing........"
  displayMessage("start guessing........");
  document.querySelector('.score').textContent = score; 
  document.querySelector('.number').textContent = "?"; 
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = "#222"
  document.querySelector('.number').style.width ="15rem" 

})