//me
// // in this function calling promble and idon't no how to solve it. i try many time to solve it but in the and my code problre solve chatgpt.😥 
// let mathematics = Number(prompt("Enter your  mathematics mark: "));
// let english = Number(prompt("Enter your english mark: "));
// let physics = Number(prompt("Enter your physics mark: "));
// let chemistry = Number(prompt("Enter your chemistry mark: "));
// let biology = Number(prompt("Enter your biology mark: "));
// let computer = Number(prompt("Enter your computer mark: "));
// let urdu = Number(prompt("Enter your urdu mark: "));
// let isi = Number(prompt("Enter your isi mark: "));
// function masks_conert_to_grade(mathematics, english, physics, chemistry, biology, computer,urdu,isi) {
//     let total = mathematics + english + physics + chemistry + biology + computer + urdu +isi;
//     let percentage = (total / 800) * 100;
//     let grade;
//     if (percentage >= 90 && percentage <= 100) {
//         grade = "A+";
//     } else if (percentage >= 70 && percentage <= 89) {
//         grade = "A";
//     } else if (percentage >= 50 && percentage <= 69) {
//         grade = "B"
//     } else if (percentage >= 0 && percentage <= 49) {
//         grade = "F";
//     } else {
//         alert("Invalid input")
//     }
//     return {percentage,grade};
// }
// let apple = masks_conert_to_grade(mathematics, english, physics, chemistry, biology, computer,urdu,isi);
// alert(`your percentage is ${apple.percentage}% and your grade is ${apple.grade}... `)









//me
// in this i try first time to crate a function but not worked i delete all code and try agin in this time function  propely working 😎
// in this function we crate units calculator
// let units_quantity = Number(prompt("Enter your units quantity: "));
// let unit_price;
// function units_calculator(units_quantity) {
//     if (units_quantity >= 0 && units_quantity <= 300) {
//         unit_price = 50;
//     } else if (units_quantity >= 301 && units_quantity <= 600) {
//         unit_price = 100;
//     } else if (units_quantity >= 601) {
//         unit_price = 150;
//     } else {
//         alert("Invalid input")
//         return 0;
//     }
//     return unit_price;
// }
// alert(`your unit price is ${units_calculator(units_quantity)} `)

// function taxes(unit_price, units_quantity) {
//     let total_price = unit_price * units_quantity;
//     let tax = total_price * (2 / 100);
//     let tax2 = total_price * (5 / 100);
//     let total_amount = total_price + tax + tax2;
//     return total_amount;
// }

// alert(`and your total Bill is ${taxes(unit_price, units_quantity)} `)


// let how_many_pay_now = Number(prompt("how many payment you  want to pay now?"));
// function pay_later(total_amount, how_many_pay_now) {
//     let pay_now = total_amount - how_many_pay_now;
//     return pay_now;
// }
// alert(`and your remaining amount is ${pay_later(taxes(unit_price, units_quantity), how_many_pay_now)} `)











//sir
// let units_quantity = Number(prompt("Enter your units quantity: "));
// let unit_price;
// let total_price 
// function units_calculator(units_quantity, ) {
//     if (units_quantity >= 0 && units_quantity <= 300) {
//         unit_price = 50;

//         // total_price = unit_price * units_quantity;


       
//     } else if (units_quantity >= 301 && units_quantity <= 600) {
//         unit_price = 100;
//         // total_price = unit_price * units_quantity;
        

//     } else if (units_quantity >= 601) {
//         unit_price = 150;
       

//     } else {
//         alert("Invalid input")
//         return 0;
//     }
// alert(`your unit price is ${unit_price} `)
//  total_price = unit_price * units_quantity;
//     return total_price;

// }
// alert(`your unit price is ${units_calculator(units_quantity)} `)

// function taxes(total_price,tax) {
//     let tax = total_price * (2 / 100);
//     let tax2 = total_price * (5 / 100);
//     let total_amount = total_price + tax + tax2;
//     return total_amount;
// }

// alert(`and your total Bill is ${taxes(unit_price, units_quantity)} `)


// let how_many_pay_now = Number(prompt("how many payment you  want to pay now?"));
// function pay_later(total_amount, how_many_pay_now) {
//     let pay_now = total_amount - how_many_pay_now;
//     return pay_now;
// }
// alert(`and your remaining amount is ${pay_later(taxes(unit_price, units_quantity), how_many_pay_now)} `)








//me
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));
// let num4 = Number(prompt("Enter the fourth number:"));
// let num5 = Number(prompt("Enter the fifth number:"));

// function findMax(num1, num2, num3, num4, num5) {
//     let total = num1 + num2 + num3 + num4 + num5;
//     let average = total / 5;
//     let defind;
//     //even odd numer
//     if (average % 2 === 0) {
//         defind = "The number is even"
 
//     } else {
//         defind = 'The number is odd'
      
//     }
//     return { defind, total };
// }
// let find = findMax(num1, num2, num3, num4, num5);
// alert(`${find.defind} ${find.total}  `);
