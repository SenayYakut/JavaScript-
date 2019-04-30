/*Let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. Variables are considered low level entities not suitable for higher levels of abstraction, thus the desire of many language designers to introduce similar but more powerful concepts like in Clojure, F#, Scala, where let might mean a value, or a variable that can be assigned, but not changed, which in turn lets the compiler catch more programming errors and optimize code better. JavaScript has had var from the beginning, so they just needed another keyword, and just borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible, although in JavaScript let creates block scope local variable instead.*/

let x=1;

if(x===1){
    let x=2;

    console.log(x);
}

console.log(x);
//2
//1