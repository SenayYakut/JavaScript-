/*Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_balance) {
    // buy a new phone!
    amount = amount + PHONE_PRICE;

    // can we afford the accessory?
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

// don't forget to pay the government, too
amount = amount + calculateTax(amount);

console.log(
    "Your purchase: " + formatAmount(amount)
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
    console.log(
        "You can't afford this purchase. :("
    );
}
// You can't afford this purchase. :(

/*The specific list of "falsy" values in JavaScript is as follows:

""(empty string)
0,-0,NaN(invalid number)
null, undefined
false
*/

/*Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

"hello"
42
true
[],[1,"2",3](arrays)
{},{a:42}(objects)
function foo(){...}(functions)
*/

//nested scopes
function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;

            console.log(a, b, c);	// 1 2 3
        }

        baz();
        console.log(a, b);		// 1 2
    }

    bar();
    console.log(a);				// 1
}

foo();