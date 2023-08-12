//! readonly, optional
// type Book = {
// 	title: string,
// 	readonly author: string,
// 	price?: number,
// 	pages: number,
// }
// let book1: Book = {
// 	title: "O'tkan kunlar",
// 	author: "Abdulla Qodiriy",
// 	pages: 304,
// }
// book1.author = "Webbrain";

//! Function
// function sum(a: number, b: string): string {
// 	return a + b;
// }
// console.log(sum(3, "4")); // 3 + "4" => "34"

//! Type alias
// type mySumFunction = (firstParam: number, secondParam: number) => number;
// const sum: mySumFunction = (a, b) => a + b;

//! never
// function generateError(message: string): never {
// 	console.log("Some");
// 	throw new Error(message);
//  for(;;);
// }
// generateError("Something went wrong!")

//! unknown, narrowing
// let title: unknown;
// title = 1234;
// let founded = "2018 yil";
// if (typeof title === "string") {
// 	founded = title;
// }
// console.log(title);

//! Type assertion, !
// let input = document.getElementById("myInput") as HTMLInputElement;
// let input = <HTMLInputElement>document.getElementById("myInput");
// console.log(input.value);
// let input = document.getElementById("myInput")!; // not undefined and not null;

//! as const
// let user = {
// 	name: "Webbrain",
// 	title: "Academy",
// } as const;
// user = "name"
// user.name = "WBA";
// user.title = "WBA";

