//Write a typescript program which contains one function named as Summation.
//That function accepts array of numbers and returns the summation of each number from array. 
//Input : 23 6 7 4 5 7 
//Output : Addition is 52
function Summation(Numbers) {
    var Addition = 0;
    for (var Cnt = 0; Cnt < Numbers.length; Cnt++) {
        Addition += Numbers[Cnt];
    }
    return Addition;
}
var Input = [23, 6, 7, 4, 5, 7, 8];
var Ret;
Ret = Summation(Input);
console.log("Addition is " + Ret);
