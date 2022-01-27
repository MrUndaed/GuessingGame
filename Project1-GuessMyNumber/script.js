'use strict';

//First we need to figure it out how to change an element using js, and we can do that
//by writing this:
document.querySelector('.message');
/*                      ^^^^^^^
                        selector(the class of the object that we want to change)
                          (if it would have been an id, we would have used a #
                          instead of a dot)
// This method is used to pass in a selector*/
    console.log(document.querySelector('.message'));
/* This will log the element/elements with the calss of message, and in this case
will log this:
<p class="message">Start guessing...</p>

//===============================================================================================

  But that isn't so usefull, so we would want ot log only the text, not the HTML
 code, and to do that we only need to add .textContent, like this: */
      console.log(document.querySelector('.message').textContent);
//This will log: Start guessing...
//=======================================================================================================



//=======================================================================================================

/* To change the text or the content of an HTML element you will need to use this:
ex:
document.querySelector('.message').textContent = 'Correct Number!!!';
     _________________|^^^^^^| |^^^^^^^^^|_________________ |^^^^^____________________________
    | the class of the element| |selecting the text content| |The value that we want to change into|
*/
//=======================================================================================================






//======================================================================================================

//  To get or set data from or to input elements(elements that let you input a number
// or a string), you will need to use this:

//-------------------------------------------------------------------------------------------
/* EX 1 (if we want to get the value from an input element):

document.querySelector('.guess').value;
//    _________________|^^^^^^| |^^^^^|_____________|^^^^^_________________________________
//   |the class of the element| |selecting the value| |The value that we want to change into|



console.log(document.querySelector('.guess').value);

/* Will log a blank space bcz the input element has no value at the Start
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 THE VALUE RETURNED BY THE '.value' PARAMETER IS RETURNED AS A STRING, LIKE
 THE VALUES RETURNED BY THE 'prompt' FUNCTION.
*/
//-------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------

/*EX 2 (if we want to set the value to an input element):

document.querySelector('.guess').value = 4    ;
                                        |^^|____________________________________
                                        |The value that we want to change it into|
*///-------------------------------------------------------------------------------------------------

//=======================================================================================================










/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

============= MAKING OUR APP DO SOMETHING WHEN WE USE THE CHECK BUTTON ===================
                            (using event listeners)

  An EVENT is something that happens on the screen, for example:
 a click, a button press, a keypress, hovering with the cursor, etc..
  With an EVENT LISTENER we can wait for a certain event and react to it

*/
//  On the button we have 2 classes, we can use ether of them, in these case I will use
// the 'check' class bcz it is more specific for the button

/*  We can ADD an EVENT LISTENER just by selecting the html element and on that element,
  we will add the '.addEventListener()' methon, in between the parantaces we will first
  add the type of the event (for button press is 'click'), and after we added the type
  of the event we will add what will the program do if that specific event is triggered,
  so basicly we will add a function that will contain the code that will be executed when
  the event happens, and that function is going to be called 'theEventHandler'
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  DON'T FORGET, FUNCTIONS ARE JUST VALUES, AND THAT MEANS THAT WE CAN PASS THAT FUNCITON
                  INTO ANOTHER FUNCITON AS AN ARGUMENT
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*
    document.querySelector('.check').addEventListener('click',function(){
      console.log(document.querySelector('.guess').value);
    });
*/

/*  What all of this will do is basicly that when the program will recive a 'click'
  EVENT (that was added using the '.addEventListener' method) on the html element
  that was selected using its class, it will run the function that we wrote, in
  this case our function will log the value of the element with the class of '.guess'
  (which is a input element, and that is why we used '.value' and not '.textContent');

  It will basicly log the value that we put in the html input element */

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// THE VALUE RETURNED FROM THE "document.querySelector('.guess').value" or
// "document.querySelector('.message').textContent" WILL BE A STRING, LIKE THE
// VALUE RETURNED BY THE PROMPT METHOD

//=====WHENEVER WE RETURN A VALUE FROM AN INPUT FIELD IT WILL BE A STRING=======
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// THE PROJECT CODE:
/*
STEPS:
-Create a const that will hold a random number between 1 and 20.
-Create a variable that will hold the value of the number the player guessed.
-Create a variable that will hold the value of the score (starting at 20).
-We will add a 'click' EVENT LISTENER that when triggered will execute a function
 that will give the guess var the value that we put in the input field, transform
 that value type in a Number type of value

IN THAT FUNCTION WE WILL INCLUDE:
-Create an if statement that will verify if the guess is equal to the random number.
-if they are not equal, subtract 1 from the score.
-if they are equal, change the 'Guess My Number?' text to "You Guessed My Number!",
 the 'start guessing...' to 'Correct Guess!' and then create another if statement that
 will see if the score that you did is bigger than the highscore, the highscore will
 have the value of the score.
*/





//============= HOW TO CHANGE THE CSS OF AN ELEMENT USING JS ===================

/*You can change the CSS of an HTML element by using following those steps:

-Select the whole HTML element that you want to change his CSS styles
ex: document.querySelector("the element(h1/body/p/etc..)");

-Use '.style.(the name of the property that you want to change)' to change the CSS
 styles for a specific thing for that element
ex: document.querySelector("body").style.backgroundColor = "the color that you want";
ex: document.querySelector("body").style.fontSize = "the size you want";

===================================================================================
*/







//======================== MAKING THE GAME ===================================



//The random number constant
var number = Math.trunc(Math.random()*20)+1;
/*
    WE ADD THAT +1 BCZ THE 'Math.trunc()' funciton basicly takes just the whole part of
  the number (doar partea intreaga) and that means that even if the number is 19.99
  it will take it just as 19.
*/

console.log(number);

var score = 20;
var highscore = 0;

//The variable that will hold the player guesses
var guess = Number(document.querySelector('.guess').value); //this is a starting value
//  which is equal to NaN (not a number)


// Now we will implement each time we press the button, we will give the guess var
// the value that we will put in the input field

  document.querySelector('.check').addEventListener('click', function(){
    guess = Number(document.querySelector('.guess').value);
  // We use the Number() function bcz THE VALUE RETURNED FROM THE:
  // "document.querySelector('.guess').value" or "document.querySelector('.message').textContent"
  // WILL BE A STRING, LIKE THE VALUE RETURNED BY THE PROMPT METHOD

    console.log(guess);

    //The if statement that will verify if the guess is equal to the random number
     if(number != guess){
       // If the guess is different form the number value then we subtract 1 from the score;
       score--;
       document.querySelector('.score').textContent = score;
     } else{
       // If the guess is equal to the number value then we'll do the folowing things:

       //Change the '?' sign
       document.querySelector(".number").textContent = number;
       //Change the width of the box in the middle
       document.querySelector(".number").style.width = "30rem";
       //Change the font size of the guessed number in the middle
       document.querySelector(".number").style.fontSize = "7rem";

       //Change the background color of the body
       document.querySelector("body").style.backgroundColor = "#60b347";

       // Change the 'Guess My Number?' text to "You Guessed My Number!"
       document.querySelector('.h1').textContent = "You Guessed My Number!";

       // Change the 'start guessing...' to 'Correct Guess!'
       document.querySelector('.message').textContent = "Correct Guess!";

       //Seting the highscore
       if(score > highscore){
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
       }

     }
     //We will set the hint if the number is higher or lower;
     if(number > guess)
        document.querySelector(".message").textContent = "The number is higher...";
      else
        document.querySelector(".message").textContent = "The number is lower...";
  });


//  Now lets make the again button work by adding another click type event listener
//  (We are basicly reseting all of the changes except of the highscore)
  document.querySelector(".again").addEventListener("click", function(){
    //We will reset the score
    score = 20;
    document.querySelector(".score").textContent = score;

    //We will reset the random number
    number = Math.trunc(Math.random()*20)+1;
    console.log(number);//We will log the number to know it so we can verify the code easyer

    // Change the "You Guessed My Number!" text to 'Guess My Number?'
    document.querySelector('.h1').textContent = "Guess My Number?";

    //Change the background color of the body
    document.querySelector("body").style.backgroundColor = "#222";

    //Change the 'number' sign back to "?"
    document.querySelector(".number").textContent = "?";
    //Change back the width of the box in the middle
    document.querySelector(".number").style.width = "15rem";
    //Change back the font size of the guessed number in the middle
    document.querySelector(".number").style.fontSize = "6rem";

    // Change the 'Correct Guess!' to 'start guessing...'
    document.querySelector('.message').textContent = "start guessing...";
  });




console.log(score);
//The variable that will hold the score (which is equal to 20 at the start)






















//
