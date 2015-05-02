/*
 Elizabeth Sutton
 4/30/15
 Functions Assignment
 SDI Section 02
 */



var roomWidth = prompt("Let's calculate how much flooring material you will need to refinish your room.\nEnter the width of your room in feet (no inches):"); //declare variable

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
    flooring = flooring.toLowerCase();
}




//begin anonymous function
var totalSqFt = function(roomWidth, roomLength) { //anonymous function
    var sqFt = roomWidth * roomLength;
    return sqFt;
}

var a = totalSqFt(roomWidth, roomLength);
alert("You will need " + a + " square feet of " + flooring + " to refinish your room."); //calculation as an expression

console.log(a);


/*
Testing

Multiple tests were run to fine-tune the code and the validation statements to the user.

1. Began by skipping the first entry and it returned "Oops! You forgot to enter the width of your room. Please enter feet only (no inches):". I entered "12" then skipped the second entry for the length. It returned "Oops! You forgot to enter the length of your room. What is the length of your room in feet only (no inches)?". I typed in "10" and skipped the next prompt. It returned "Please choose between carpet or hardwood:". I chose carpet by typing in "CARPET" in all caps. It returned "You will need 120 square feet of carpet to refinish your room.".

2. At the first prompt I entered "111", then "111" at the second prompt. However at the third prompt I entered "laminate" and it returned "Please choose between carpet or hardwood:". I then entered "Hardwood" and it returned "You will need 12321 square feet of hardwood to refinish your room."

3. At the first prompt I entered "1234", then skipped the second prompt. It returned "Oops! You forgot to enter the length of your room. What is the length of your room in feet only (no inches)?" so I entered "1234". At the next prompt I entered "hardwood flooring" and it returned "You will need 1522756 square feet of hardwood flooring flooring to refinish your room." I then took out "flooring" from the text string.

 */
