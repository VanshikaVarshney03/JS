 //var c = 300   no scoping 
let a = 300
if (true) {
    let a = 10
    const b = 20

    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //no error

function addone(num){
    return num + 1
}



addTwo(5)//error bcz you hold that in a variable and that variable is presnt after the calling


const addTwo = function(num){
    return num + 2
}