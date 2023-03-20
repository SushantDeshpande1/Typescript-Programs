//Write a typescript program which contains one function named as Summation.
//That function accepts array of numbers and returns the summation of each number from array. 
//Input : 23 6 7 4 5 7 
//Output : Addition is 52

function Summation(Numbers : number[]) : number
{
    let Addition : number = 0

    for(let Cnt = 0; Cnt < Numbers.length; Cnt++)
    {
        Addition += Numbers[Cnt]
    }

    return Addition
}

var Input : number[] = [23, 6, 7, 4, 5, 7]
var Ret

Ret = Summation(Input)

console.log("Addition is "+Ret)