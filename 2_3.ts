//Write a typescript program which contains one function named as Maximum.
//That function accepts array of numbers and returns the second largest number from array. 
//Input : 23 89 6 29 56 45 77 32 
//Output : Second Maximum number is 77

function Maximum(Numbers : number[]) : number
{
    let Max1 : number = Numbers[0]
    let Max2 : number = Numbers[0]

    for(let Cnt = 1; Cnt < Numbers.length; Cnt++)
    {
        if(Numbers[Cnt] > Max1)
        {
            Max2 = Max1
            Max1 = Numbers[Cnt]
        }
        else if (Numbers[Cnt] > Max2 && Numbers[Cnt])
        {
            Max2 = Numbers[Cnt]
        }
    }

    return Max2 
}

var List : number[] = [23, 89, 6, 29, 56, 45, 77, 32]

var Ret 

Ret = Maximum(List)

console.log("Second Maximum Number is"+Ret)