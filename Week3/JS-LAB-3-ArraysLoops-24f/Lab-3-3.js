//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var total = 0;
var shippingThreshold = 35;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < shippingThreshold)
//GET ITEM COST FROM USER
{
	var itemprice = prompt("Enter price of the item");


	//CONVERT USER INPUT TO A NUMBER
	var price = parseInt(itemprice);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	var total = total + price;

	//PUSH ITEM COST TO CART ARRAY
	shoppingCart.push(price)
}




//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!" + " $" + total)

//SEND OUTPUT TO CONSOLE
console.log("Item prices " + shoppingCart.join(" | "));
