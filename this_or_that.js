function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name:"Kyle"
};
var you = {
    name:"Reader"
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER



function f(){
    return this.a;
}

var g = f.bind({a: "azerty"});
console.log(g());//azerty

var h = g.bind({a: "yoo"});// bind only works once
console.log(h());//azerty

var o ={a:37, f:f, g:g, h:h};
console.log(o.a, o.f(), o.g(), o.h());
