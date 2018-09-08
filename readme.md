Question 1. In your README to the best of your knowledge please explain what the following lines of code do

let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
- 


Question 2. In your README to the best of your knowledge please explain why we are placing the

let fizzBuzz = new FizzBuzz

outside the it block?
- Since it than can be used by more than one it-block.


Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?
- 


Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
- 


Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test
- Feature tests are to test what the user see, eg buttons, dropdown, result for a scenario.
- Unit tests are to test the actual code, that the logic is correct and to minimize the number of bugs.