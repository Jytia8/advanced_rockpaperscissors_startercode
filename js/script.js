//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

var userChoice;
userChoice="";

var computerChoice;
computerChoice="";

var winner;
winner="";

var choices;
choices=["rock","paper","scissors"];


//FUNCTIONS




// DOCUMENT READY FUNCTION

$( document ).ready(function() {
  $("#button").click(function(){
        
       userChoice = $("#in").val();
    $("#user").html(userChoice);
     
       var randomIndex = Math.floor(Math.random() * choices.length);
        computerChoice = choices[randomIndex];
        
    $("#computer").html(computerChoice);
     
     if ((userChoice === "rock") && (computerChoice === "scissors")) {
            $("#winner").html("User Wins!");
     }
      else if ((userChoice === "rock") && (computerChice === "paper")){
            $("#winner").html("Computer Wins!");
     }
      else if ((userChoice === "rock") && (computerChoice === "rock")) {
            $("#winner").html("Tie!");
     }
      else if ((userChoice === "paper") && (computerChoice === "rock")) {
            $("#winner").html("User Wins!");
     }
      else if ((userChoice === "paper") && (computerChoice === "scissors")) {
            $("#winner").html("Computer Wins!");
     }
      else if ((userChoice === "paper") && (computerChoice === "paper")) {
            $("#winner").html("Tie!");
     }  
      else if ((userChoice === "scissors") && (computerChoice === "rock")) {
            $("#winner").html("Computer Wins!");
     }  
      else if ((userChoice === "scissors") && (computerChoice === "paper")) {
            $("#winner").html("User Wins!");
     }  
      else if ((userChoice === "scissors") && (computerChoice === "scissors")) {
            $("#winner").html("Tie!");
     }  
         
        
        
        
        
        
        
  });
});