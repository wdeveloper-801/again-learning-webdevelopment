// //task1
// let units_quantity = Number(prompt("Enter the number of units"));
// let final_total;
// let units_price;
// let uni_set;
// let tax;
// let total;
// function unit_price(units_quantity, units_price, tax, total) {
//     if (units_quantity >= 0 && units_quantity <= 300) {
//         uni_set = units_price = 50;
//         alert("The price of each unit is 50 before tax")
//     }
//     else if (units_quantity >= 301 && units_quantity <= 600) {
//         uni_set = units_price = 100;
//         alert("The price of each unit is 100 before tax")
//     } else if (units_quantity >= 601) {
//         uni_set = units_price = 150;
//         alert("The price of each unit is 150 before tax")
//     }
//     if (uni_set >= 0 && uni_set <= 300) {
//         tax = 20
//     } else if (uni_set >= 301 && uni_set <= 600) {
//         tax = 40
//     } else if (uni_set >= 601) {
//         tax = 60
//     }
//     total = uni_set + tax
//     return total;
// } 
// let final_done = unit_price(units_quantity, units_price, tax, total)
// alert(`The price of each unit after tax is ${final_done}`)
// function bill(total,units_quantity) {
//     final_total = total * units_quantity
//     return final_total
// }
// alert(`The total bill is ${bill(final_done,units_quantity)}`)





// BMI Calculator
// Calorie Calculator
// Income Tax Calculator
// Salary Calculator

// task2bmi
// let weight = Number(prompt("Enter your weight in kg "));
// let height = Number(prompt("Enter your height in cm "));
// function bmi(weight, height) {
//     let cm = height / 100;
//     let cm2 = cm * cm;
//     let final = weight / cm2;
//     return final.toFixed(2);
// }
// alert(`Your BMI is ${bmi(weight,height)}`)



//task3 Calorie
// let gender = prompt("Enter your gender (M/F)");
// let age = Number(prompt("Enter your age"));
// let weight = Number(prompt("Enter your weight in kg"));
// let height = Number(prompt("Enter your height in cm"));
// function bmr(gender, age, weight, height) {
//    let bmr;
//     if (gender === "m") {
//         bmr = 10 * weight + 6.25 * height - 5 * age + 5;
//     }else{
//            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
//     }
//     return bmr.toFixed(2);
// }
// alert(`Your BMI is ${bmr(gender,age,weight,height)} kcal/day`)





//task4 income tax 
// let in_come = prompt("Enter your income of this year");
// let tax;
// let final;

// function income_tax(in_come, tax, final) {
//     if (in_come >= 0 && in_come <= 200000) {
//         alert("you will pay 20000 rupess tax to the  government.")
//         tax = 20000;
//         final = in_come - tax;

//     } else if (in_come >= 200000 && in_come <= 900000) {
//         alert("you will pay 60,000 rupess tax to the government.")
//         tax = 60000;
//         final = in_come - tax;
//     } else {
//         return "you are not eligible for tax"
//     }
//     return final;
// }

// alert(`Your legal amound is ${income_tax(in_come, tax, final)}`)



//task5 selery tax
let selery = Number(prompt("Enter your selery"));
let tax;
let done;
function selery_calculator(selery, tax, done) {
    if (selery >= 0 && selery <= 50000) {
        alert("you will pay 2% tax to the  government.")
        tax = (selery * 2) / 100;
        done = selery - tax;
    } else if (selery >= 50000 && selery <= 100000) {
        alert("you will pay 3% tax to the  government.")
        tax = (selery * 3) / 100;
        done = selery - tax;
    } else if (selery >= 100000 && selery <= 150000) {
        alert("you will pay 4% tax to the  government.")
        tax = (selery * 4) / 100;
        done = selery - tax;
    } else if (selery >= 150000) {
        alert("you will pay 5% tax to the  government.")
        tax = (selery * 5) / 100;
        done = selery - tax;
    } else {
        return "under 49k tax is free"
    }
    return done;
}
alert(`after tax your selery is ${selery_calculator(selery, tax, done)}`)