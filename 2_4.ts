//Write a typescript program which contains one arrow function named as ChkArmstrong.
//That function accepts one numbers and check whether number is Armstrong number or not. 
//Input : 153 
//Output : It is Armstrong number 

function ChkArmstrong(No : number) : void
{
   var No1 : number = No
   var rem : number = 0
   var res : number = 0

   while (No1 > 0)
   {
    rem = Math.floor(No1) % 10
    res += rem * rem * rem
    No1 = Math.floor(No1)/10
   }

   if (No==res)
   {
    console.log("It is a Armstrong Number")
   }
   else
   {
    console.log("It is Not a Armstrong Number")

   }
}

ChkArmstrong(153)