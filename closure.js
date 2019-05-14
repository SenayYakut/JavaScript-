// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
function foo(){
    var a=2;
    function bar(){
        console.log(a);//2
    }
    bar();
}

foo();//2

function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.
var fn;

function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    fn = baz; // assign `baz` to global variable
}

function bar() {
    fn(); // look ma, I saw closure!
}

foo();

bar(); // 2

function wait(message) {

    setTimeout(function timer() {
        console.log(message);
    }, 1000);

}

wait("Hello, closure!");
