const values = [0, 1, -1, "", "hello", "0", "null", undefined, NaN, [], {}];

for (const v of values) {
    if (v) {
        console.log(v, "is truthy");
    } else {
        console.log(v, "is falsy");
    }
}

// 0 is falsy
// 1 is truthy
// -1 is truthy
// "" is falsy
// "hello" is truthy
// "0" is truthy
// undefined is falsy
// NaN is falsy
// [] is truthy
// {} is falsy
// true is truthy
// false is falsy

console.log(true && false);
console.log(true || false);
console.log(!true);

console.log("hello" && "world"); //world
console.log("" || "world") // world
console.log("" && "world") // ""
console.log("" || "fallback"); // fallback
console.log(null ?? "default");
console.log(0 || "default");
console.log(0 ?? "default");

// TERNARY
// If condition is true, give me the first one; else give me the second one
const age = 20;
const status = age >= 18 ? "adult" : "minor"
console.log(status)

// this keyword
person = {
    name: "mykels",
    greet(){

    }
}
// To use a function in an object, don't use the keyword

//Null and Undefined
let age1 = null;
console.log(age1, age1 + 3, `the age is ${age1}`);

let age2;
console.log(age2, age2 + 3, `the age is ${age2}`);

//booleans & comparisons
console.log(true, false, "true", "false");

let email1 = "bolaji@gmail.com";
console.log(email1);

let result8 = email1.includes("bolaji");
console.log(result8);

let names = ["mario", "luigi", "toad"];
let result9 = names.includes("luigi");
console.log(result9);

//comparison operators
let age3 = 25;

console.log(age3 == 25);
console.log(age3 == 30);
console.log(age3 != 30);
console.log(age3 != 25);
console.log(age3 > 20);
console.log(age3 < 20);
console.log(age3 <= 25);
console.log(age3 >= 25);

let name1 = "shaun";
console.log(name1 == "shaun");
console.log(name1 == "Shaun");
console.log(name1 > "crystal");
console.log(name1 > "Shaun");
console.log(name1 > "Crystal");

//loose comparison (different types can still be equal)
let age4 = 25;
console.log(age4 == 25);
console.log(age4 == "25");
console.log(age4 != 25);
console.log(age4 != "25");

//strict comparison (different types cannot be equal)
console.log(age4 === 25);
console.log(age4 === "25");
console.log(age4 !== 25);
console.log(age4 !== "25");

//type conversion
let score1 = "100";
score1 = Number(score1);
console.log(score1 + 1);
console.log(typeof score1);

let result10 = Number("hello");
console.log(result10);

let result11 = String(50);
console.log(result11, typeof result11);

let result12 = Boolean(100);
console.log(result12, typeof result12);

let result13 = Boolean(0);
console.log(result13, typeof result13);

let result19 = Boolean("0");
console.log(result19, typeof result19);

let result16 = Boolean(null);
console.log(result16, typeof result16);

let result17 = Boolean(undefined);
console.log(result17, typeof result17);

let result14 = Boolean("hello");
console.log(result14, typeof result14);

let result15 = Boolean("");
console.log(result15, typeof result15);