//Write a typescript program which contains one arrow function named as ChkArmstrong.
//That function accepts one numbers and check whether number is Armstrong number or not. 
//Input : 153 
//Output : It is Armstrong number 
function ChkArmstrong(No) {
    var No1 = No;
    var rem = 0;
    var res = 0;
    while (No1 > 0) {
        rem = Math.floor(No1) % 10;
        res += rem * rem * rem;
        No1 = Math.floor(No1) / 10;
    }
    if (No == res) {
        console.log("It is a Armstrong Number");
    }
    else {
        console.log("It is Not a Armstrong Number");
    }
}
ChkArmstrong(153);
