/* Functions Worksheet
Elizabeth Sutton
4/30/15
SDI Section 02
 */

//Circumference: Calculate the circumference of a circle

function calculateCircumference(){
    var radius = 3; //radius
    var Pi = 3.14159; //known Pi
    var circumf = 2*Pi*radius; //calculation
    console.log("The circumference of the circle is " + circumf + "."); //text for output
}

calculateCircumference(); //output solution

/*Testing
My initial test used 1 as the radius, however my code was wrong and it presented a minor error due to wrong casing.
I fixed it and it output "The circumference of the circle is 6.28318."

I tested it again using 3 as the radius and got: "The circumference of the circle is 18.849539999999998."
 */



//Stung: Calculate how many bee stings it takes to kill a poor, innocent animal
//Given: It takes 8.666666667 bee stings per pound to kill a poor, innocent animal

function calcBeeStings(){ //begin function
    var poorInnocentVictimWt = 5; //victim weight
    var beeStingPound = 8.666666667; //my given
    var beeStingsActual = poorInnocentVictimWt * beeStingPound; //calculation
    console.log("It takes " + beeStingsActual + " bee stings to kill this poor, innocent animal.");
}

calcBeeStings();