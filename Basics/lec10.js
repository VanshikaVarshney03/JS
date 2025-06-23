 //stack (primitive)and heap memory(non primitive)
 //in stack we will provided with the copy and changes will not be done in previous 
//stack 
 let nameMy = "ram"
 let anotherName =nameMy
 anotherName="shyam"
 console.log(anotherName);
 console.log(nameMy);

 //in heap we will we provided with refrence if changes willl made it will change the original one also
 //heap
let userOne = {
    email:"ram@gmail.com",
    upi:"ram@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);




