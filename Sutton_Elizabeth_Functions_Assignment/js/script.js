/*
 Elizabeth Sutton
 4/30/15
 Functions Assignment
 SDI Section 02
 */

/* Rubric:
- 2+ functions (1-normal, 1-anonymous) using Arguments & 3+ Parameters
- at least 1 anonymous function
- main code variables are NOT inside functions
- user prompts validated using a While Loop
- test values at end of code
- 5+ meaningful commits
 */

/*Calculate how much flooring will be needed for your remodeling project
1. W * L = sq. foot of room
2. sq. ft of room / 18.45 sq. ft. (1-case of flooring) = # of cases of flooring needed
 */


var roomWidth = prompt("Let's calculate what the square footage of the room you wish to re-floor.\nEnter the width of your room in feet (no inches):"); //declare variable

//validate user entered a number and that it is not letters
while(roomWidth==="" || isNaN(roomWidth)){ //condition to test
    if(roomWidth===""){
        roomWidth = prompt("Oops! You forgot to enter the width of your room. Please enter feet only (no inches):");

    } else if(isNaN(roomWidth)){

        roomWidth = prompt("Oops! Please only enter numbers, no letters.\nEnter the width of your room in feet (no inches):");

    }

}

var roomLength = prompt("Enter the length of your room in feet (no inches):"); //variable

//validate after prompt
while(roomLength===""  || isNaN(roomLength)){
    roomLength = prompt("Oops! You forgot to enter the length of your room. What is the length of your room in feet only (no inches)?");

}



//begin 3rd variable
var flooring = prompt("Were you thinking of carpet or hardwood flooring?");
flooring = flooring.toLowerCase();

while(flooring !="carpet" && flooring!="hardwood" && flooring!="hardwood flooring"){
    flooring = prompt("Please choose between carpet or hardwood:");
}




//begin anonymous function
var totalSqFt = function(roomWidth, roomLength) { //anonymous function
    var sqFt = roomWidth * roomLength;
    return sqFt;
}

var a = totalSqFt(roomWidth, roomLength);
alert("The total square feet of your room using " + flooring + " flooring is " + a + "square feet."); //calculation as an expression

console.log(a);



