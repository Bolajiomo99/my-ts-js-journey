// =====================================================
// MINI-BUILD: NUMBER GUESSING GAME

// Make two files in day2:

// guess.html
// guess.js

// In guess.html:

// `  Guessing Game

/* Guessing game, check the console
`
// Use the browser for this one, not Node. The reason is prompt(), a browser function that pops up an input box and pauses until the user answers. Node has no equivalent that is simple at your current level, readline is callback-based and that is day 8 material. Do not fight that today.

// Open it with Live Server and keep devtools open.

// Requirements:

// Generate a secret number between 1 and 100. Use Math.floor(Math.random() * 100) + 1. Look up both Math.random and Math.floor on MDN and work out why the multiply, the floor, and the plus one are each needed. Do not just paste it.
// Loop, asking the user to guess. On each guess, tell them "too high", "too low", or "correct".
// Stop when they get it right, and tell them how many guesses it took.
// Give them a maximum of 7 attempts. If they run out, reveal the answer.

// Things you will run into, and should solve yourself:

// prompt() returns a string, always. "50" is not 50. Comparing a string to a number with < will sometimes appear to work because of coercion, but it will bite you. Convert it with Number(). This is yesterday's lesson showing up in real code.

// You need a loop whose length is not known in advance, so a while loop fits better than a for loop. Though a for loop with a break also works, since you have a hard cap of 7. Either is fine, pick one and be able to explain why.

// What if they type letters instead of a number? Number("abc") gives NaN. Decide whether to handle that. If you do, isNaN() is the check.

// What if they press cancel? prompt() returns null. Another edge case worth knowing exists.

// Stretch, only if you finish early: track their guesses in an array and print the full history at the end. That gives you a reason to use arrays before day 4 formally introduces them.
*/


const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`(Cheat code: The number is ${secretNumber})`);

// We give the user exactly 7 tries
for (let attempt = 1; attempt <= 7; attempt++) {
  
     // 1. Ask for a guess
  let guessString = prompt(`Attempt ${attempt} of 7. Guess a number between 1 and 100:`);
  
  // EDGE CASE 1: User pressed Cancel (prompt returns null)
  if (guessString === null) {
    console.log("Game cancelled by user.");
    break; // Exit the loop entirely
  }
  
    // 2. Convert the string into a real Number
  let guessNumber = Number(guessString);
  
  // EDGE CASE 2: User typed letters (Number returns NaN)
  // We use the built-in isNaN() function to check this
  if (isNaN(guessNumber)) {
    console.log("That is not a valid number! You just wasted a guess.");
    continue; // Skip the rest of this loop and go to the next attempt
  }
  
  // Core game logic
  if (guessNumber === secretNumber) {
    console.log(`Correct! You guessed it in ${attempt} tries.`);
    break; 
  } 
  else if (guessNumber < secretNumber) {
    console.log("Too low!");
  } 
  else if (guessNumber > secretNumber) {
    console.log("Too high!");
  }

  // GAME OVER CHECK
  // If we reach the end of the loop and the attempt is 7, they lost.
  if (attempt === 7) {
    console.log(`Game Over! You ran out of guesses. The number was ${secretNumber}.`);
  }
}