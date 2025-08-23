function useless(params) {


    // //subject1 this and function
    // // let student = {
    // //     name: "omer",
    // //     marks:95.4,
    // //     print_marks: function(){
    // //         console.log(this.marks)//this.masks easy meaning student.masks.
    // //     },
    // //     "skils":"None"
    // // }
    // // console.log(student);



    // // subject2 proto_type

    // let employee = {
    //     cal_tax() {
    //         console.log("tax rate is 10%");
    //     }
    // }


    // let omer = {
    //     salary: 1000,
    // }
    // omer.__proto__ = employee;


    // let hamza = {
    //     salary: 2000,
    //     cal_tax2() {
    //         console.log("tax rate is 20%");
    //     }
    // }
    // hamza.__proto__ = employee;


    // // subject3 constructor function
    // class car {
    //     constructor(brand) {
    //         console.log("creating new object");
    //         this.brand_name = brand;
    //     }
    //     start() {
    //         console.log("car is started");
    //     }
    //     stop() {
    //         console.log("car is stopped");
    //     }
    //     //    /  setbrand(brand) {
    //     //   /       this.brand_name = brand;
    //     //    /  };
    // }
    // let city = new car("city");
    // let bmw = new car("bmw x5");
    // // / bmw.setbrand("bmwx5");


    // // subject4 inheritance
    // // class doctor_1 {
    // //     skil1() {
    // //         console.log("pathology");

    // //     }
    // // }
    // // class doctor_2{
    // //     skil2() {
    // //                 console.log("cathology");
    // //     }
    // // }
    // // class doctor_3 extends doctor_1 {
    // //     skil3() {
    // //         console.log("my age is 30");
    // //     }
    // // }
    // // let doctor = new doctor_3();


    // //super keyword
    // class doctor_1 {
    //     skil1() {
    //         console.log("pathology");

    //     }
    // }
    // class doctor_2 extends doctor_1 {
    //     constructor(brand) {
    //         super();
    //         this.brand_name = brand;
    //     }
    //     skil2() {
    //         console.log("cathology");
    //     }
    // }
    // let main = new doctor_2("corrola");


    
// //sir
// let obj = {
//     a: "zike",
//     b: 12,
//     "c": "hjgjg",
//     name: {
//         first: "zike",
//         last: "khan",
//         name2: {
//             first: "zike12",
//             last: "khan23",
//             name3: {
//                 first: "zike123",
//                 last: "khan234",
//             }
//         }
//     }
// }

// // console.log( typeof obj["b"]);
// // console.log(obj.name.name2.name3.first);
// // let data = new Object()
// // data.a="zike"
// let obj1 = {
//     a: "a",
//     b: "b",
// }
// let obj2 = {
//     a: "c",
//     b: "b",
// }
// let obj3 = { a: "asd", b: "cxz" }

// //add object to object use ... spread operator ...obj,...obj2,...obj3
// console.log({ ...obj1, ...obj2, ...obj3 });
// console.log(obj1);
}















// object start again  me final
// we have two way to create object 1. object literal  2. object constructor

//object literal
let obj = {
    name: "saeed",
    age: 12,
    address: "sdfsd",
    phone: 123456789,
    "email": "sdfsd@gmail.com",
    gender: true,
}
// how to acces object from . if you want accces string use [].
// console.log(obj.name);
// console.log(obj["email"]);//string acces


//if you want add new propertie in object
obj.aame2 = "saeed2"
// console.log(obj);

// if you want object properties vale naver chanage use object.freeze().
// Object.freeze(obj)

obj.gatting = function () {
    console.log("hello c user.");
}
// we use this keyword in object to access object properties.
obj.gatting2 = function () {
    console.log(`hello js user. ${this.name}}`);
}
// console.log(obj.gatting());
// console.log(obj.gatting2());


// secound way to create object is object constructor in this secound we addd properties after crate object.
let obj2 = new Object();
// console.log(obj2);

//  we ADD properties in this object
obj2.name = "saeed2";
// console.log(obj2);

//now we crate object in object
let obj3 = {
    name: "kaisi",
    age: 13,
    secound: {
        name: "saeed",
        age: 12,
    }

}
// console.log(obj3.secound.name);




let obj4 = {
    1: 2,
    2: 4,
    5: 6,
}

let obj5 = {
    11: 2,
    22: 4,
    55: 6,
}
// let obj6 = { obj4, obj5 }
// first way to plus object there are two ways to plus objects.

//first
let obj88 = Object.assign(obj4, obj5)

// secound
let obj8 = { ...obj4, ...obj5 }
// console.log(obj8);



//new topic

const aa = [
    {
        name: "kasfi",
        email: "kasfi@gmail.com"
    },

    {
        name: "omer",
        email: "omer@gmail.com"
    },
    {
        name: "nnsn",
        email: "omer@gmail.com"
    },

    {
        name: "uu",
        email: "uu@gmail.com"
    }
]
// console.log(aa[1]);

//  iwant keys of object
console.log(Object.keys(aa));
console.log(Object.values(aa));
console.log(Object.entries(aa));

console.log(aa.hasOwnProperty("name"));


