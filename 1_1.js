//Write a typescript program which contains one function named as Maximum. 
//That function accepts three parameters and it should returns largest value from three input parameters. 
//Input : 23 89 6 
//Output : Maximum number is 89
function Maximum(No1, No2, No3) {
    var MaxValue = No1;
    if (No2 > MaxValue) {
        MaxValue = No2;
    }
    if (No3 > MaxValue) {
        MaxValue = No3;
    }
    return MaxValue;
}
var A = 23;
var B = 89;
var C = 6;
var Ret = 0;
Ret = Maximum(A, B, C);
console.log("Largest Number is :" + Ret);
