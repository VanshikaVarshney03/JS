 const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//it will push the  elements in the form of arrray

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
//cocat will merge into new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//spread the array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//flat will all recursive array into one arr
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  //givearr
console.log(Array.from({name: "hitesh"})) // interesting  empty arr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//arr from multiple variables