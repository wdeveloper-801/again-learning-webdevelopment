    // // strings in a sequence of charactor used to represent text
// let a = "Apna collage"
// a.length
// a.indices
// //3 code APPLY
// console.log(a);
// console.log(a.length);
// console.log(a[5]);


//TEMPLATE LITERALS
// let obj = {
//     item: "pen",
//     price: 50}

// first way
// console.log(`the cost of`,obj.item,`is`,obj.price,`soller`)

// //secound way and best

// let output = `the cost of ${obj.item} is ${obj.price} dollor`;
// console.log(output);
// // console.log(typeof output,);


//new TEMPLATE LITERALS
// let s = "apan\ncollage"
// let r = "apan\tcollage"
// console.log(s);
// console.log(r);


//these are inbuild function to maniplate a string
// let x = "CODE WITH HARRYn n"
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// let y = "               CODE WITH HARRY                    "
// console.log(y);
// console.log(y.trim());


// 1slice code

// let m = "1234567890"
// console.log(m.slice(2,6));

// 2joing
// let a = "apna"
// let b = " collage"
// let  ready = a+b
// alert(ready)


//3 replace 
// let replace = "hello"
// // console.log(replace.replace("h","m"));
// console.log(replace.replace("lo","p"));

//4 and last one
// let str = "javascript"
// // console.log(str.charAt(2));
// console.log(str);

//another
// let str = "harry"

// str = str.replace("h","j")
// console.log(str);


//pratircs
let fullname = prompt("enter your full name")
// let user = "@" + fullname + fullname.length 
let user = "@" + fullname.toUpperCase() + fullname.length //+"  this is your full name"
alert(user) 