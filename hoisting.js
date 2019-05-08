a = 2;
var a;
console.log(a);// 2

console.log(a);//undefined
var a = 2;

//So, what's going on here? It would appear we have a chicken-and-the-egg question. Which comes first, the declaration ("egg"), or the assignment ("chicken")?

function foo() {
    var a;
    console.log(a); // undefined
    a = 2;
}
foo();//undefined
// If hoisting were to re-arrange the executable logic of our code, that could wreak havoc.

function foo() {
    var a;
    console.log(a); // undefined
    a = 2;
}
foo();//undefined
//So the program can perhaps be more accurately interpreted like this:

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    // ...
};//TypeError 
//Function declarations are hoisted, as we just saw. But function expressions are not.

foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
    // ...
};
//This snippet is more accurately interpreted (with hoisting) as:
var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function () {
    var bar = ...self...
    // ...
}
//Both function declarations and variable declarations are hoisted. But a subtle detail (that can show up in code with multiple "duplicate" declarations) is that functions are hoisted first, and then variables.

foo(); // 3

function foo() {
    console.log(1);
}

var foo = function () {
    console.log(2);
};

function foo() {
    console.log(3);
}
