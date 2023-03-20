//Write a typescript program which contains one function named as ChkPrime.
//That function should accept one number and it should return true if the given number is prime and otherwise return false. 
//Input : 11 
//Output : It is prime number
function ChkPrime(No1) {
    if (No1 <= 1) {
        return false;
    }
    for (var i = 2; i < No1; i++) {
        if (No1 % i === 0) {
            return false;
        }
    }
    return true;
}
var A = 20;
var Ret;
Ret = ChkPrime(A);
console.log(ChkPrime(A));
