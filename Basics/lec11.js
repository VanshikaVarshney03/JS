 const name = "harshit"
 //const name = new String('harshit) //it will be as object it will be in key value pair 
 //console.log(name[0]);

 const repocount = 10

//console.log(name+repocount+"Value");//concat
//use backticks string interpulation
console.log(`hello my name is ${name} and my repocount is ${repoocunt}`)

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //4 not included //not -ve
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //reverse
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove starting and ending sapce only whitespace 
//trim are of two types trimstart and trim end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//into array 