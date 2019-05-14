//lexical scope is write-time, whereas dynamic scope (and this!) are runtime.
//JavaScript does not, in fact, have dynamic scope.It has lexical scope.Plain and simple.But the this mechanism is kind of like dynamic scope.


//lexical scope
function foo() {
    console.log(a); // 2
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();


//How can this be? Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3.

function foo() {
    console.log(a); // 3  (not 2!)
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();