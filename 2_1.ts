//Write a typescript program which contains one function named as Maximum.
//That function accepts array of numbers and returns the largest number from array. 
//Input : 23 89 6 29 56 45 77 32 
//Output : Maximum number is 89

function Maximum(Nos :number[]) : Number
{
    let Max = Nos[0]

    for(let Cnt = 1; Cnt < Nos.length; Cnt++)
    {
        if(Nos[Cnt] > Max)
        {
            Max = Nos[Cnt]
        
        }
    }

    return Max
}

var Arr : number[] =[555, 23, 89, 6, 29, 56, 45, 77, 32]

var Ret

Ret = Maximum(Arr)

console.log("Maximum Number is "+Ret)