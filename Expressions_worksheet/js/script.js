//Elizabeth Sutton, 4/12/15, Expression Worksheet

//calculate how many slices of pizza Sparky gets
const partyPeople = 25;
const pizzaSlices = 8;
const pizzaOrdered = 12;

//multiply pizzaSlices by pizzaOrdered
var sparkyGets = (pizzaSlices * pizzaOrdered) % partyPeople;
console.log("Sparky gets " + sparkyGets + " slices of pizza.");




//calculate average weekly shopping bill
var groceries = [134.59, 114.56, 156.22, 145.78, 119.89];
var totalSpent = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4];
var avgBill = totalSpent / 5;

console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + avgBill);




//calculate the discounted price of my item with and without tax
var origPrice = 5;
var description = sweater;
var discountOff = .80;
var tax = 1.08;
var costNoTax = origPrice * discountOff;
var costWithTax = (origPrice * discountOff) * tax;
console.log("Your " + description + "was originally $" + origPrice + ", but after a " + discountOff + "% discount, it is now $" + costNoTax + " without tax, and $" + costWithTax + " with tax.");