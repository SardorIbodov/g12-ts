//! Array vs Tuple
//? Array => o'zgaruvchan
//? Tuple => belgilangan
// const array: string[] = ["salom", "xayr"];
// array.push("webbrain");
// console.log(array);
// const tuple: ["salom", true] = ["salom", true];
// tuple.push("webbrain");
// console.log(tuple);
//! Literal type
// let title: "webbrain";
// title = "webbrain";
// console.log(title);
// console.log(typeof title);
// let obj: { name: "wba"; password: 12345 };
// obj = {name: "wba", password: 12345};
// console.log(obj);
//!
// let method: "POST" | "PUT" | "GET" | "DELETE";
// method = "GET";
// fetch("https://jsonlaceholder.typicode.com/todos", {
//   method,
// }).then((res) => console.log(res));
//! type
// let firstName: string = "Webbrain";
// type ourType = string;
// let firstName: ourType = "Webbrain";
// firstName = "Academy";
// let userInput: {user: string} | {age: number} | {user: string, age: number};
// type onlyUser = { user: string };
// type onlyAge = { age: number };
// type user_and_age = onlyUser & onlyAge;
// let userInput: onlyUser | onlyAge | user_and_age;
// userInput = { user: "webbrain" };
// userInput = { age: 15 };
// userInput = { user: "webbrain", age: 15 };
//! functions
//? without parameters
// function sayHi(): string {
//   return "Hi";
// }
// console.log(sayHi());
//? with parameters
// function sayHi(firstName: string = "Webbrain"): string {
//   return `Hi ${firstName}`;
// }
// console.log(sayHi());
//? without return
// function logSomething(): void {
//   console.log("Hello world");
// return "Salom";
// }
// logSomething();
//? function which returns another function
// function getRandomNumber(): Function {
//   return Math.random;
// }
// console.log(getRandomNumber()());
