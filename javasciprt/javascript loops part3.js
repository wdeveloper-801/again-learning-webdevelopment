const react = require("react");

//advacend loops only apply on arrey
function me(params) {

  // me i only do 2 loops which name is filer,map
  // let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // let bb = aa.map((value) => (value * 10 + 1))
  // console.log(bb);


  // let books = [
  //   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  //   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  //   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  //   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  //   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  //   { title: 'Book Six', genre: 'Fiction', publish: 1950, edition: 2010 },
  //   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  //   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  //   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  // ];
  // let ak = books.filter((item) => (item.publish >= 1950 && item.title === "Book One"))
  //   .map((books) => ({
  //     ...books,
  //     edition: books.edition * 100
  //   }));
  // console.log(ak);

}


function sir1(params) {


  //   // const words = ["spray", "elite", "exuberant", "destruction", "present"];

  //   // const result = words.filter((word) => word.length > 6);

  //   // // console.log(result);

  //   // //



  //   function isBigEnough(value) {
  //     return value >= 10;
  //   }
  //   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  //   console.log(filtered);

  //   // filtered is [12, 130, 44]




  //   // const elements = ["Fire", "Air", "Water"];

  //   // console.log(elements.join());
  //   // // Expected output: "Fire,Air,Water"

  //   // console.log(elements.join(" "));
  //   // // Expected output: "FireAirWater"

  //   // console.log(elements.join(" <-> "));
  //   // // Expected output: "Fire-Air-Water"


  //   // const array = [1, 2, "a", "1a"];

  //   // console.log(array.toString());
  //   // // Expected output: "1,2,a,1a"
  // 
}






//filler,map,foreach,tolocalsring,join we learn this.

//filer
// const data = [12,34,23,56,9]
// let info = data.filter((num) => {
//    return num > 20;  
// })

// console.log(info);
// console.log(data);

// let cities = [
//   { name: "Karachi", population: 200 },
//   { name: "Lahore", population: 120 },
//   { name: "Islamabad", population: 100 },
//   { name: "Multan", population: 300 }
// ];


// let result = cities.filter((city) => {
//   return city.population > 100 || city.name
// })
// console.log(result);




// foreach

// const info = [12, 34, 23, 56, 90];
// info.forEach((num) => {
//   num = num - 910;
//   console.log("the value  are data * 10 = ",num);

// });



// const info = [12, 34, 23, 56, 90];
// let data = [];
// info.forEach((num) => {
//  if (num < 40 ) {
//   data.push(num)
//   console.log(num);

//  }
//  console.log(info);

// })
// const info = [12, 34, 23, 56, 90];
// let data = [];

// function loo(x, y) {
//   // check each number in y
//   y.forEach(num => {
//     if (num > 40) {
//       x.push(num); // store in data
//     }
//   });

//   return { x, y };
// }
// console.log(loo(data,info));



// Map
// const info = [12, 34, 23, 56, 90]; 
// let data=info
// .map((num)=>num+10)
// .map((num)=>num*10)
// .filter((num)=>num>400)
// console.log(data);


//toLocaleString()
// let info = [12, 34, 23, 56, 90];
// let how = info.toLocaleString();
// console.log(typeof info);
// console.log(typeof how);


// // example2
// let data99 = new Date();
// console.log(data99.toLocaleString());

// // example3
// let num = 1000000
// let data = num.toLocaleString('en-pk');//pakistan
// let data2 = num.toLocaleString('en-us');//usa
// let data3 = num.toLocaleString('en-IN');//india
// console.log(data3);




//join
// let info = [12, 22, 33];
// let i = [19, 23, 44];
// let ma = info.join("+")
// console.log(ma);



//SIR






let a = ["ali ", "khan", "ahmed"]
//  a.join("")
a.join("<=>")
//  a.join("+")

//  console.log(a);





// display()
//  const display = function () {
//   console.log("hello world");

//  }


// name()
//  function name() {

//   console.log("hello world");

//  }



// const data = 12345678765.98;
// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// console.log(date.toLocaleString("en-US", { hour12: false }));


// console.log(data.toLocaleString('en-US',{style:'currency',currency:'ERO'}));



// const today = new Date();
// console.log(today.toLocaleString('en-US',));



// hositing



// const fun = () => {
//   console.log("hello world");
//   let data = "temp"
//   const fun1 = () => {
//     console.log(data);
//     let fun = "fun"
//     console.log(fun);
//   }
//   fun1()
// }
// fun()


// if (true) {
//   let username = "temp"
//   // console.log(data);
//   if (username === "temp") {
//     const data = "hello world";
//     console.log(username+data);
//   }
//   // console.log(data);
  
//   console.log(username);
// }




// const data = function (num) { 
//   return num+2
  
// }
// console.log(data(2));


// console.log(Math.random() ); 
// console.log(Math.random()*10);



// const user= {
//   username: "ali",
//   password: "123456",
//   email: "ali@gmail.com",
//   age: 20,
//   gender: "male",
//   addres : function(){
//     console.log(`${this.password} this is my website passwords`);
    
//   }
  
// }
// console.log(user.addres())




// const user = (num,num1)=>num+num1;
// const user1 = (num,num1)=>{
//   return num-num1;
// };
// const user2 = (num,num1)=>(num*num1)
// const user2 = (num,num1)=>({user:"zikria"});



// console.log(user(2,3));
// console.log(user1(2,3));
// console.log(user2(2,3));


// let task = {
//   class1 : function() {
//     console.log("you access class 1");
//   },
//   class2 : function() {
//     console.log("you access class 2");
//   },
//   class3 : function() {
//     console.log("you access class 3");
//   },
//   class4 : function() {
//     console.log("you access class 4");
//   },
//   class5 : function() {
//     console.log("you access class 5");
//   },
// }
// task.class1();







