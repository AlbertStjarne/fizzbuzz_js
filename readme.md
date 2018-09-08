#Question 1.
Explain what the following lines of code do
```let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)```
- 

---
#Question 2.
Explain why we are placing the
```let fizzBuzz = new FizzBuzz```
outside the it block?
- Since it than can be used by more than one it-block.

---
#Question 3.
Explain the difference between using === and == in JS?
- === is a strict equality operator, used for comparing, 1+1 === 2 is true while "2" === 2 is false, o === false is false.
- == is type converting equality, will convert to value independent of data type thus "2" == 2 is true, 0 == false is true.

---
#Question 4.
Explain why we are moving (number % 5 === 0) to the top?
- Just for clarity, to have the code descending. It has no impact on the running of the code. Once adding the (number % 15 === 0), the new code has to be on top. I do prefer to write this code as (number % 5 === 0 && number % 3 === 0) since we are then really stating what we mean, a bit longer but more explainatory in my mind.

---
#Question 5.
Explain the difference between feature and unit test
- Feature tests are to test what the user see, eg buttons, dropdown, result for a scenario.
- Unit tests are to test the actual code, that the logic is correct and to minimize the number of bugs.


#Question 6.
Explain what expectations in the context of testing are
- 


#Question 7.
Write a line to line explanation of what is happening in this code

```<script src="src/js/fizz-buzz.js"></script>                      // calls for source fizz-buzz.js
    <script>
        document.addEventListener('DOMContentLoaded', () => {           // in 
            let button = document.getElementById('button')              // initialize variable button, that equals the button element id in the html
            let displayDiv = document.getElementById('display_answer')  // initialize displayDiv variable, that equals the 'display_answer' element id in the html
            button.addEventListener('click', () =>{     // calling the addeventlistener methood on the variable button, with  
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>```
    - general:
      - script tags used to run javascript within the html document instead of in its own file.
      - document refers to this document, thus the index.html file


#Question 8.
Explain what a CDN (Content Delivery Network) is?
      - 