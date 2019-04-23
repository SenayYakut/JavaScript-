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
