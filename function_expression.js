var getRectArea= function(width, height){
    return width * height;
}
console.log(getRectArea(3,4));//12

console.log(notHoisted)//undefined

var notHoisted = function () {
    console.log('bar');
};

var math ={
    "factic": function factorial(n){
        console.log(n)
        if(n<=1){
            return 1;
        }
        return n * facorial(n-1);
    }
};
math.factit(3)//3;2;1