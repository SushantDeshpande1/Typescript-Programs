//Write a typescript program which contains one function named as Area.
//That function should calculate area of circle.
//Accept value of radius from user and return its area.
//Default value of PI should be 3.14 if it is not provided by the caller. 
//Input : 5 
//Output : Area of circle is 78.5 
function Area(radius, pi) {
    var Ans = 0;
    if (pi == undefined) {
        pi = 3.14;
    }
    Ans = radius * radius * pi;
    return Ans;
}
var A = 5;
var B = 3.14;
var Ret = 0;
Ret = Area(A, B);
console.log("Area of circle is : " + Ret);
