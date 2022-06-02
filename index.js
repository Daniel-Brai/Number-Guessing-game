/* 
    Using javascript
    Create a number guessing game to generate a number between the range of 1 and 2. 
    The game should prompt users for their username (saved in cookie).
    Set range as function parameter and prompt the player to predict the generated number between the given range, at a correct guess, 
    the game should award the player a point (also saved in cookie), 
    and move them to stage 2 by increasing the range limit value by 1,
    e.g range is from 1 and 3 for stage 2 and so on. 
    Connect replit account to github and save your program in github.
*/

// Dependencies
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')

// createing a console interface for input and output processes
const reader = readline.createInterface({ input, output })

// information about the game for the user
console.info('\nNumber Guessing Game!\n')
console.info('Rules:')
console.info('Your input should be in the format: username low_range-upper_range guessedNumber')
console.info('An example is: John 30-50 41')
console.info('You earn 1 point if you guess correctly, originaling it is 0')
console.info('Your upper range keeps increasing by an odd number value until you decide to stop')

// const numberGuessingGame = (no_of_times) => { 
//     for (let i = 1; i < no_of_times; i++) { 
        
        
//     }
// }

// prompt the user for his/her name
reader.question('\nEnter your username to play the number guessing game, range of numbers you want to play between and your guessed number: ', (expression) => {
  // assigning the variable data from the input stram
  let data = expression

  // get the username and range from the data varible by splitting it since it is a string
  let username = data.split(" ")[0].toLowerCase()
  let range = data.split(" ")[1]
  let guessedNumber = data.split(" ")[2]
  let point = 0 

  // get the user inputed upper range and lower range
  let lower_range = range.split("-")[0]
  let upper_range = range.split("-")[1]

  // converting the lower_range, upper_range and guessedNumber variables to the number data type
  lower_range = +(lower_range)
  upper_range = +(upper_range)
  guessedNumber = +(guessedNumber)

  // initializing a cookie to store the username
  // using a Javascript Map as a cookie since in the general sense of things
  // they both act the same way with key-value pairs 
  // Also, the number game guessing game is a console app so we can use any
  //  other way through express, cookieParser or the normal javascript cookies 
  //  because the app is being executed with node js which doesn't have the access the browser DOM for storing cookies unless with the use
  //  of dependencies like cookieParser or express
  let cookie = new Map()

  // set the the key 'user' to the value 'username' 
  // now we have a somewhat cookie like structure
  cookie.set('user', [username, point])

  //  get the user cookie
  let user = cookie.get('user')

  // Logging the inputs to the console
  console.log(`\nYou name is: ${user[0]}`)
  console.log(`Your Lower range is: ${lower_range}`)
  console.log(`Your Upper range is: ${upper_range}`)
  console.log(`Your Guessed No is: ${guessedNumber}`)

  // checks
  if (typeof guessedNumber !== 'number' || typeof guessedNumber === 'undefined' || isNaN(guessedNumber) ) { 
    console.log('Please enter a valid character preferably a numeric one!')
    // exit the program immediately if even when converted from a string to number type
    // the guessedNumber number variable isn't a number data type
    process.exit(1)
  }

  if (typeof lower_range !== 'number' || typeof lower_range === 'undefined' || isNaN(lower_range) ) { 
    console.log('Please enter a valid character preferably a numeric one!')
    // exit the program immediately if even when converted from a string to number type
    // the lower_range number variable isn't a number data type
    process.exit(1)
  }

  if (typeof upper_range !== 'number' || typeof upper_range === 'undefined' || isNaN(upper_range) ) { 
    console.log('Please enter a valid character preferably a numeric one!')
    // exit the program immediately if even when converted from a string to number type
    // the upper_range number variable isn't a number data type
    process.exit(1)
  }

    // defining a random number generator function fuunction that accepts a upper and lower range as it parameter
    const randomNoGenerator = (lower, upper) => { 
      let generatedNo = Math.floor(Math.random() * (upper - lower)) + lower;
      console.log(`The computer generated the number within your set range is: ${generatedNo}`)
        
        // check if the user guessed number is equal to the random generated number
        if (guessedNumber === generatedNo) {

          // increase the user score by a point if he/she wins
          user[1] = 1
          user = cookie.get('user')
          // console.log(user)
          console.log(`\nYour score is: ${user[1]}`)
          console.log(`%s You made a correct guess: ${guessedNumber} is equal to ${generatedNo}!`, `🥳`)

        } else { 
          user[1] = 0
          console.log(`Your score is: ${user[1]}\n`)
          console.log(`%s You guessed wrong. Try again!\n`, `😢`)
        }
    }
    // calling the random number generator function
    randomNoGenerator(lower_range, upper_range)

    // close the readline process 
    reader.close()
})

// Issues
//  I was unable to use git to upload to github in my project it kept giving my an authenication error even when I checked stackoverlow and  performed most of the solutions listed so I just use the basic file upload system in github.

