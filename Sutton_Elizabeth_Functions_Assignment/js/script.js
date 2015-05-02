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

var roomWidth = prompt("Enter the width of your room in feet (no inches):"); //variable
var roomLength = prompt("Enter the length of your room in feet (no inches):"); //variable
var totalSqFt = roomWidth * roomLength; //calculation
alert("The total square feet of your room is " + totalSqFt + "."); //calculation as an expression
console.log(); //print results to console


