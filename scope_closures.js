// Scope Question, Identifying LHS and RHS Lookups.
// This is a question based on the Quiz at the bottom used identifying LHS and RHS.
//The following code there's 3 LHSs and 4 RHSs, based on what the book says.

function foo(a){
    var b = a;
    return a + b;
}

var c = foo(2);

/*
   LHS  var c=...(1), foo(a=2)(2), b= ..(3)
   and
   RHS foo(2)(1), ..a;(2), a+..(3), ..+b(4).
*/

function foo(a){
    var b = a;
    return a + b;
}
var newVar = 2; //New Code.
var c = foo(newVar);// New Code.

/*
    LHSs being: var newVar=..(1), var c=..(2), f(newVar = a)(3), b=..(4)
    and
    RHSs being: foo()(1), ..=a(3),a+..(4), ..+b(5).

*/

function foo(a){
    var b = a * 2;
    function bar(c){
        console.log(a,b,c);
    }
    bar(b * 3);
}

foo(2);//2 4 12

function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 -- Oops, leaked global!

function foo(a){
    var b = 2;

    function bar(){

    }
    var c =3;
}
bar(); // fails

console.log(a, b, c); // all 3 fail

function doSomething(a) {
    b = a + doSomethingElse(a * 2);

    console.log(b * 3);
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething(2); // 15

function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }

    var b;

    b = a + doSomethingElse(a * 2);

    console.log(b * 3);
}
doSomething(2); // 15

//The i = 3 assignment inside of bar(..) overwrites, unexpectedly, the i that was declared in foo(..) at the for-loop. In this case, it will result in an infinite loop, because i is set to a fixed value of 3 and that will forever remain < 10.
function foo(){
    function bar(a){
        i=3;
        console.log(a+1);
    }
    for (var i=0; i<10; i++){
        bar(i*2);
    }
}
foo();