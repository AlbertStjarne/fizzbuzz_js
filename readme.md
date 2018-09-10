# FizzBuzz revisited, now in JavaScript

## Instructions
This is the FizzBuzz-revisited-now-in-JavaScript-weekend-challenge for week 02 in the Craft Academy programming course. It is built in TDD fashion with unit and feature tests.


## Running in the browser
Open link in the browser, https://github.com/
Enter a number in the input field.
Press the Check button
Depending on numbers entered, the result will be:
 - 'Fizz' for any number divisible with 3
 - 'Buzz' for any number divisible with 5
 - 'FizzBuzz' for any number divisible with 3 and with 5
 - The entered number for any other number

## Built with
The project is built with JavaScript as programming language, with html and some styling made with tailwind, via CDN.
* 

## Author
* Albert Stjärne (https://github.com/AlbertStjarne)

## Acknowledgement
Thanks to the coaches for support during the project. 


## Answers to questions in the weekend challenge

###Question 1.
Explain what the following lines of code do
```let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)```
* 


### Question 2.
Explain why we are placing the
```let fizzBuzz = new FizzBuzz```
outside the it block?
* Since it than can be used by more than one it-block.


### Question 3.
Explain the difference between using === and == in JS?
* === is a strict equality operator, used for comparing, 1+1 === 2 is true while "2" === 2 is false, o === false is false.
* == is type converting equality, will convert to value independent of data type thus "2" == 2 is true, 0 == false is true.


### Question 4.
Explain why we are moving (number % 5 === 0) to the top?
* Just for clarity, to have the code descending. It has no impact on the running of the code. Once adding the (number % 15 === 0), the new code has to be on top. I do prefer to write this code as (number % 5 === 0 && number % 3 === 0) since we are then really stating what we mean, a bit longer but more explainatory in my mind.


### Question 5.
Explain the difference between feature and unit test
* Feature tests are to test what the user see, eg buttons, dropdown, result for a scenario.
* Unit tests are to test the actual code, that the logic is correct and to minimize the number of bugs.


### Question 6.
Explain what expectations in the context of testing are
* Stating what we want to test. Only to have one expectation to each example.


### Question 7.
Write a line to line explanation of what is happening in this code

```<script src="src/js/fizz-buzz.js"></script>                      // source for the script file is fizz-buzz.js
<script>
document.addEventListener('DOMContentLoaded', () => {           // in 
let button = document.getElementById('button')              // initialize variable button, that equals the button element id in the html
let displayDiv = document.getElementById('display_answer')  // initialize displayDiv variable, that equals the 'display_answer' element id in the html
button.addEventListener('click', () =>{     // calling the addeventlistener method on the variable button, with  
let value = document.getElementById('value').value  // initializes value variable and assigns it the value from html file with the id value.
let fizzBuzz = new FizzBuzz     // initialize fizzBuzz variable and assigns it 
let result = fizzBuzz.check(value)  // initialize result variable and assigns it the result of calling the check function in fizzBuzz with the value from the input field.
displayDiv.innerHTML = result;  // finds the innerHTML of the displayDiv variable ('display_answer') and assign it the result.
})
})
</script>```
* general:
..* script tags used to run javascript within the html document instead of in its own file.
..* document refers to this document, thus the index.html file


### Question 8.
Explain what a CDN (Content Delivery Network) is?
* It is the transparent backbone of the Internet. They are there to improver latency, the delay from requesting a website to appearence on the screen. The CDN shortens the physical distance between you and the websites hosting server. CDN stores a cached version of the site in multiple geographical locations. Not to be used when hosting and only having visitors in same small geographical area. It is an umbrella term spanning different types of content delivery services: video streaming, software download, web and mobile content, load balancing and more.