//Write a typescript program which contains one function named as Maximum. 
//That function accepts three parameters and it should returns largest value from three input parameters. 
//Input : 23 89 6 
//Output : Maximum number is 89



function Maximum(No1 : number, No2 : number, No3 : number) : number
{
    let MaxValue : number = No1
     
    if (No2 > MaxValue)
    {
        MaxValue = No2
    }

    if (No3 > MaxValue)
    {
        MaxValue = No3
    }
    
    return MaxValue
}

var A : number = 23
var B : number = 89
var C : number = 6

var Ret : number = 0
Ret = Maximum(A, B, C)

console.log("Largest Number is :"+Ret)