//we can create objects by two  litreals(not singleton) and if by constructor(singleton)


// singleton
//  way to create by constructor-Object.create   

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // to use symbol as key
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
//console.log(JsUser.full name)//error

//to use symbol as key
// console.log(JsUser[mySym])
//to change
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //no one can change
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());