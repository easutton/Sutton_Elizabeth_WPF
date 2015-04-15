//Elizabeth Sutton, 4/12/15, Expression Assignment

//Calculate your home's price per square foot

//Givens: overall square footage of home, square footage of nonliving spaces, price paid for home

var overallFootage = prompt("In order to calculate the price per square foot, please enter the total square footage of your home:");
var livingSpace = prompt("Enter the square footage of the nonliving spaces:");
var pricePaid = prompt("Enter the amount you paid for your home:")
var priceSF = (overallFootage - livingSpace) / pricePaid;
alert("The price of your home per square foot is " + priceSF);