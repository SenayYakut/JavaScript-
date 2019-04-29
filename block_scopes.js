var a = 2;
(function IIFE(global){
    var a=3;
    console.log(a);
    console.log(global.a);
})(window);
console.log(a);
//you can name the parameter(s) anything that suits you. This is mostly just stylistic choice.

var a = 2;

(function IIFE(def) {
    def(window);
})(function def(global) {

    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2

});

//Blocks as scopes
