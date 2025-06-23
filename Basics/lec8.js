console.log(2>1);
console.log(2==1);

console.log(2<1);
console.log("2"<1); 
//but sometimes it will not give exopected result so MAKE SURE DATATYPES SHOULD BE SAME
console.log(null>0);
console.log(null>=0);
console.log(null==0);
//the reason is that equality == check and comparisions  > < >= < =
//work differently comparisions convert null to a num,treating it as 0 .that's why null>=0  is true
//avoid these

//Strict Check (===) it only doesnot check the value but also the datatype 
console.log("2"===2)

 

