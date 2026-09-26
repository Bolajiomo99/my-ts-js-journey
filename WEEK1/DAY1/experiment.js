alert("Hello World");
// data type
let age = 52;
let score = 153;

console.log(age);
console.log(score);

age = 30;
console.log(age);

const year = 2027;

console.log(year);
//string
console.log("Hello World");

let email = "bolaji@gmail.com"

console.log(email);
//string concatenation

let firstname = "Random";
let lastname = "Person";

let fullname = firstname + " " + lastname;

console.log(fullname);

//getting characters
console.log(fullname[0]);

//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
// let result = fullname.toLowerCase();
// let result1 = fullname.toUpperCase();
// console.log(result, result1, fullname);


//indextation 

// let index = email.indexOf("@");
// console.log(index);

let index = email.lastIndexOf("a");
console.log(index);

// slice of string
// let result = email.slice(0, 6);
// console.log(result);

// let result = email.substr(4, 10);
// console.log(result);

//strings types
let result = email.replace("bolaji", "random");
console.log(result);

let radius =10;
let pi = 3.14;

console.log(radius,pi);

//math operators +, -, *, /, **, %

console.log(10/2);

let result1 = radius % 3;
console.log(result1);

let result2 = pi * radius**2;
console.log(result2);

//increment and decrement operators
let likes = 10;

likes = likes + 1;
console.log(likes);

likes++;
console.log(likes);

likes--;
console.log(likes);

// +=, -=, *=, /=

likes += 10;
console.log(likes);

likes -= 5;
console.log(likes);

likes *= 2;
console.log(likes);

likes /= 2;
console.log(likes); 

//order of operators - BIDMAS

likes = 5 * (10 -3) **2 / 1;
console.log(likes);

//NaN - Not a Number

console.log(5 / "hello");
console.log(5 * "hello");

let ninja = ["shaun", "ryu", "chun-li"];
console.log(ninja);
console.log(ninja[1]);

ninja[1] = "ken";
console.log(ninja[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

//array methods
let result3 = ninja.join(", ");
console.log(result3);

let result4 = ninja.indexOf("chun-li");
console.log(result4);

let result5 = ninja.concat(["ken", "crystal"]);
console.log(result5);

let result6 = ninja.push("yoshi");
console.log(result6);
console.log(ninja);

let result7 = ninja.pop();
console.log(result7);
console.log(ninja); 

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