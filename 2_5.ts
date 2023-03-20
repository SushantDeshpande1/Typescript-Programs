//Write a typescript program which contains one function named as ChkString.
//That function accept one string and check whether that string contains “Marvellous” word or not. 
//Input : “Pune Kothrud Marvellous Infosystems” 
//Output : String contains Marvellous in it.

function ChkString(str : string) : void
{
    if(str.indexOf("Marvellous"))
    {
        console.log("String contains Marvellous in it.")
    }
    else
    {
        console.log("String does not contains Marvellous in it.")
    }
}

var Sentence : string = "Pune Kothrud Marvellous Infosystems"

var Check

Check = ChkString(Sentence)