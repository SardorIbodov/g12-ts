//! O'zgaruvchilarni yaratish
//? Primitive o'zgaruvchilar
// let firstName: string = "Webbrain";
// let age: number = 5;
// let isOpen: boolean = true;
// console.log(firstName, age, isOpen);
//? Non-primitive o'zgaruvchilar
// let user:{firstName:string, founded: number} = {firstName: "Webbrain", founded: 2020};
// let fields:string[] = ["Frontend", "Backend"];
// let fields:[string, boolean] = ["Frontend", true];
// fields.push("Mobile");
// fields.push(true);
// let fields:[] = []; //! O'zgarmaydi
// let data:{id: number}[] = [{id: 1}, {id: 2}]
//? any
// let title:any = "Webbrain";
// title = 123;
// title = {};
// title = [];
//?
// let phoneNumber = "+998877654321";
// phoneNumber = {};
//? union
// let firstName: string | {title: string} | boolean = "Webbrain";
// firstName = {title: "Webbrain"};
// firstName = true;
// let array:[string | number, string | number] = [1, "1"];
// array = ["1", 1];
// let object: {id:number | string} = {id: "1"};
// let array: any[] = ["salom", 1, true, [], {}];
//? tuple
// let myTyple: [string][][] = [[["salom"], ["xayr"]]];
//? enum => enumerate
// enum myEnumerate {
//   uz = "uzbek", // 0
//   ru = "russian", // 1
//   en = "english", // 2
// }
// console.log(myEnumerate.uz);
// console.log(myEnumerate.ru);
// console.log(myEnumerate.en);
// enum myEnum {
//   a,
//   b,
//   c = 5,
//   d,
// }
// console.log(myEnum.a, myEnum.b, myEnum.c, myEnum.d);
// let id: any = "12345";
// 1
// let copyId = <number>id;
// copyId = 12345;
// console.log(copyId);
// 2
// let copyId2 = id as number | string;
// copyId2 = 54321;
// copyId2 = "54321";
// console.log(copyId2, "copy2");
//! DOM
// var inp = document.getElementById("inpElem");
// console.log(inp.value);
