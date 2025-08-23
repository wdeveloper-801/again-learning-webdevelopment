// i want to crate a calculator

// let num1 = prompt("enter first num")
// let num2 = prompt("enter secound num")
// let store;
// function cal(num1, num2) {
//     store = num1 * num2
// }


// function xyz(num1,num){
//     return num ** num1;

// }
// console.log(xyz(2,5));



// function
// var let const
// opraters
// assmnet
// data











//pratise

// way 1 too call a funcion
// let num1 = Number(prompt("enter a value num"))
// let opraters = prompt("-,+,*")
// let num2 = Number(prompt("enter a value num2"))
// function calculator(num1, num2, opraters) {
//     if (opraters === "+") {
//         return num1 + num2;
//     } else if (opraters === "-") {
//         return num1 - num2;
//     } else if (opraters === "*") {
//         return num1 * num2;
//     } else {
//         return alert("anything is wrong.");
//     }
// }
// alert(`the value is ${calculator(num1, num2, opraters)}`)




//way 2 too call a function
// let num1 = Number(prompt("enter a value num"))
// let num2 = Number(prompt("enter a value num2"))
// let opraters = prompt("-,+,*")
// let res;
// function calculator(num1, num2, opraters) {
//     if (opraters === "+") {
//         res = num1 + num2;
//     } else if (opraters === "-") {
//         res = num1 - num2;
//     } else if (opraters === "*") {
//         res = num1 * num2;
//     } else {
//         res = alert("anything is wrong.");
//     }
//     return res;
// }
// let complete = calculator(num1, num2, opraters);
// alert(`the value is ${complete}`)





//part1
// function texcal(price, quantity, tax, tvtax, discound) {
//     let total = price * quantity;
//     let taxes = total + tax + tvtax;
//    let discound_amound = taxes * (discound / 100);
//     let final = taxes - discound_amound;
//     return final;
// }
// console.log(texcal(50,500,10000,1000,10));







//part2
// let name;
// let age;
// function greet(name, age) {
//   let how =  `hello your name is ${name} and your age is ${age}`
//   return how;
// }
// let start = (greet("ali", 20));
// console.log(start);



//part3
// function starte(p1,p2, age1,age2,) {
//   return  `my name is ${p1} and your name is ${p2} and my age is ${age1}  and your age is ${age2}.`
// }

// console.log(starte("ali", "omer", 25, 20));



//part4
// //i wanrt to make a calculator
// let num1 = Number(prompt("enter the first number"));
// let num2 = Number(prompt("enter the se number"));
// let opraters = prompt("enter the oprater +,-,*,/");
// function calculator(num1, num2, opraters) {
//     let result;
//     if (opraters === "+") {
//         result = num1 + num2;
//     }
//     else if (opraters === "-") {
//         result = num1 - num2;
//     }
//     else if (opraters === "*") {
//         result = num1 * num2;
//     }
//     else if (opraters === "/") {
//         result = num1 / num2;
//     }
//     return result;

// }
// alert(calculator(num1, num2, opraters));   

//part5
// bill
// let units_price = Number(prompt("unit price"))
// let units = Number(prompt("unit "))
// let tax = Number(prompt("tax"))
// let tvtax = Number(prompt("tv tax"))
// let discound = Number(prompt("discound"))

//part6
// function electcity_bill_calculator(units_price, units, tax, tvtax, discound) {
//     let units_used = units_price * units;
//     let totol_tax = units_used + tax + tvtax;
//     let discound_bill = totol_tax * (discound / 100);
//     let final = totol_tax - discound_bill;
//     return final;
// }
// alert(`your final bill ${electcity_bill_calculator(units_price,units,tax,tvtax,discound)}`)
// console.log(electcity_bill_calculator(50, 500, 5000, 5000, 2));




//part7
//2% tax automaticaly APPLY
// let units_price = Number(prompt("unit price"))
// let units = Number(prompt("unit "))
// let tax = Number(prompt("tax"))
// let tvtax = Number(prompt("tv tax"))
// // let discound = Number(prompt("discound"))

// function electcity_bill_calculator(units_price, units, tax, tvtax, ) {
//     let units_used = units_price * units;
//     let totol_tax = units_used + tax + tvtax;
//     let discound_bill = totol_tax * (2 / 100);
//     let final = totol_tax - discound_bill;
//     return final;
// }
// alert(`your final bill ${electcity_bill_calculator(units_price,units,tax,tvtax,)}`)


//1step advanced
//part8
// let units_price = Number(prompt("unit price"))
// let units = Number(prompt("unit "))
// function bill(units_price, units) {
//     let units1 = units_price * units;
//     let tax1 = units1 * (5 / 100);
//     let tax2 = units1 * (5 / 100);
//     let final_tax = units1 + tax1 + tax2;
//     let discound = final_tax * (2 / 100);
//     let full_final = final_tax-discound;
//     return full_final
// }
// alert(`the bill is ${bill(units_price, units)}`)



//part9
// let units_used = Number(prompt("Enter how many units you used"))
// function total_bill(units_used) {
//     let units_price = 50;
//     let finall = units_used * units_price
//     let tax1 = finall * (5 / 100);
//     let tax2 = finall * (5 / 100);
//     let final_tax = finall + tax1 + tax2;
//     let discound = final_tax * (5 / 100);
//     let final = final_tax - discound;
//     return final
// }
// alert(`your bill is ${total_bill(units_used)}`)






//part10

//  const car = {type:"Fiat", model:"500", color:"white",
    
//  };
//  console.log(car.color)
// to create the object 
// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// delete myObj.myCars.car1
// console.log( myObj.myCars.car1);




