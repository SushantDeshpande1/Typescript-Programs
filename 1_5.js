//Write a typescript program which contains one function named as Fibonacci.
//That function accept one number from user and print Fibonacci series till that number. 
//Input : 21 
//Output : 1 1 2 3 5 8 13 21
function Fibonacci(No1) {
    var n1 = 1;
    var n2 = 1;
    var num;
    while (n1 <= No1) {
        console.log(n1);
        num = n1 + n2;
        n1 = n2;
        n2 = num;
    }
}
var Input = 21;
var SendInput;
SendInput = Fibonacci(Input);
