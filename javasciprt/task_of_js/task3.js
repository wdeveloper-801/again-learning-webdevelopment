function j(params) {


    // let units_quantity = Number(prompt("Enter the units quantity"));
    // let unit_price;
    // let tax;
    // let final;
    // let final2;

    // function bill(units_quantity, unit_price, tax, final) {
    //     if (!units_quantity || units_quantity <= 0 || isNaN(units_quantity)) {
    //         alert("Invalid input. Please enter a number greater than 0.");
    //     } else if (units_quantity >= 0 && units_quantity <= 300) {
    //         alert("unit price is 50")
    //         unit_price = 50
    //     }
    //     else if (units_quantity >= 301 && units_quantity <= 500) {
    //         alert("unit price is 80")
    //         unit_price = 80
    //     } else if (units_quantity >= 501 && units_quantity <= 1000) {
    //         alert("unit price is 130")
    //         unit_price = 130
    //     } else if (units_quantity >= 1001) {
    //         alert("unit price is 180")
    //         unit_price = 180
    //     } else {
    //         return "invalid input",0;
    //     }
    //     final = units_quantity * unit_price;
    //     if (final >= 0 && final <= 6000) {
    //         alert("You will pay rupees 500 tax. because you crossed bill limit ")
    //         tax = 500
    //         final2 = tax + final;
    //     } else if (final >= 6001 && final <= 12000) {
    //         alert("You will pay rupees 1000 tax. because you crossed bill limit")
    //         tax = 1000
    //         final2 = tax + final;
    //     } else if (final >= 12001) {
    //         alert("You will pay rupees 2000 tax. because you crossed bill limit")
    //         tax = 2000
    //         final2 = tax + final;
    //     } else {
    //         return "invalid input",0;
    //     }
    //     return final2
    // }
    // alert(` your totol bill is ${bill(units_quantity, unit_price, tax, final)}`)
}



//2
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    let units_quantity = document.querySelector("#number").value;
    let unit_price;
    let tax;
    let final;
    let final2;
    if (units_quantity >= 1 && units_quantity <= 300) {
        alert("unit price is 50")
        unit_price = 50
    }
    else if (units_quantity >= 301 && units_quantity <= 500) {
        alert("unit price is 80")
        unit_price = 80
    } else if (units_quantity >= 501 && units_quantity <= 1000) {
        alert("unit price is 130")
        unit_price = 130
    } else if (units_quantity >= 1001) {
        alert("unit price is 180")
        unit_price = 180
    } else {
        return "invalid input";
    }
    final = units_quantity * unit_price;
    if (final >= 1 && final <= 7000) {
        alert("You will pay rupees 500 tax. because you crossed bill limit ")
        tax = 500
        final2 = tax + final;
    } else if (final >= 7001 && final <= 13000) {
        alert("You will pay rupees 1000 tax. because you crossed bill limit")
        tax = 1000
        final2 = tax + final;
    } else if (final >= 13001) {
        alert("You will pay rupees 2000 tax. because you crossed bill limit")
        tax = 2000
        final2 = tax + final;
    } else {
        return "invalid input";
    }

    final2 = tax + final;

    alert(`Your total bill is ${final2}`);

});




//task1
// let name = prompt("Enter the name you want repeat");
// let repeat = Number(prompt("Enter the number of times you want to repeat the name"));
// // with funchion
//  function repeatName(name, repeat) {
//      for (let index = 1; index <= repeat; index++) {
//         console.log(` ${index}:${name}`);
//     }
//  }
//  repeatName(name, repeat);

// // with out function
// for (let index = 1; index <= repeat; index++) {
//     console.log(` ${index}:${name}`);
// }


//task2

// let user=Number(prompt("Enter which mathematics table you want i will print it for you"))
// for (let index = 1; index <= 10; index++) {
//     console.log(`${user} * ${index} = ${index*user}`);
// }


//task3
// l    et table = Number(prompt("Enter your table"));
// let a = 1;
// while (a <= 10) {
//     console.log(`${table} x ${a} = ${a * table}`);
//     a++;
// }
// do {
//     console.log();
//     a++
// } while (a < 10);



// task4
// let aa = Number(prompt("which 1"));
// // let aa = 10;
// function odd_even_checker(aa) {
//     for (let a = 1; a <= aa; a++) {
//         if (a % 2 == 0) {
//             console.log(`${a} is even evno`);
//         } else if (a % 2 !== 0) {
//             console.log(`${a} is odd odo`);
//         }
//         else {
//             console.log("not found");
//         }
//     }
// }
// odd_even_checker(aa);

// task5







// let finder = prompt("which one you want print even or odd");
// function even(finder) {
//     if (finder == "even") {
//         for (let index = 1; index <= 10; index++) {
//             if (index % 2 == 0) {
//                 console.log(`${index} is even number`);

//             }

//         }
//     } else if (finder == "odd") {
//         for (let index = 1; index <= 10; index++) {
//             if (index % 2 !== 0) {
//                 console.log(`${index} is odd number`);
//             }
//         }
//     }
// }
// even(finder);


