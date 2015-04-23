/*
 Elizabeth Sutton
 SDI Section 2
 Conditionals Worksheet
 4/22/15
 */

/*LAST CHANCE FOR GAS - expressions with conditionals
 A driver has to determine if they can make it across the desert with their current fuel.
 They are about to pass the last gas station for the next 200 miles and they need to determine
 whether they should stop now for gas or not.


 Given:
 Gas efficiency of the car (in mpg)
 Gauge reading of the gas tank (in %)
 Car’s gas tank capacity (in gallons)
 Result To Print Out:
 “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”

 */

/*
carMpg = 32;
gasGauge = 75;
gasTank = 13;

• 200 miles @ 32/gal = 6.25 gal. of gas needed to make the trip
• full tank = 13 gal   75% tank = 9.75 gal

If enough gas, print to the console "keep driving".
*/

var enoughGas = 200;
var carMpg = 32;
var gasGauge = .25;
var gasTank = 13;
var gasNeeded = 6.25;

if((enoughGas / carMpg) < (gasTank * gasGauge)){
   console.log("Yes, you can make it without stopping for gas!");
}
if((enoughGas / carMpg) > (gasTank * gasGauge)){
    console.log("You only have " + gasNeeded + " gallons of gas in your tank, better get gas now while you can!");
}


/*GRADE LETTER CALCULATOR - multiple results
A student earns a number grade at the conclusion of a course at Full Sail.
Determine the appropriate letter grade for that number using conditional statements.

Assume grades are whole numbers that never go below 0 or above 100.
Use the FullSail Grade scale.
There should be only one print out to the console.

Given:
Grade (in percent)
Result To Print Out:
“You have a X%, which means you have earned a(n) X in the class!”
 */

var grade = 85;
