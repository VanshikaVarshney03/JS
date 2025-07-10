 //primitive
 //7types:String ,Number,null,Boolean,symbol,undefined,BigInt

//JavaScript is a dynamically typed language.


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId); //not same even the value passed are same therefore symbol make it unique
 //Refrence/Nonprimitive
 //Arrays,Objects,Functions

 const hero = ["hema","ritu"]
 let myObj = {
    name:"harshit",
    age:21,
 }

  const myfun = function(){
     console.log("hello"); 
 }

console.log(typeof myfun);
// https://262.ecma-international.org/5.1/#sec-11.4.3