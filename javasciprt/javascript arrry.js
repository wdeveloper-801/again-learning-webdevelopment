// Array
function sir(params) {

    // console.log("this arry ");
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(arr);
    // console.log("add the end ogf the value ");
    // arr.push(21)
    // console.log(arr);
    // arr.pop()
    // delete
    // console.log(arr);
    // arr.unshift(12)
    // console.log(arr);
    // arr.shift()
    // console.log(arr);
    // arr.splice(2, 1)
    // console.log(arr);
    // arr.slice()
}


let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//array methosds
// push and pop use in end of the arrey and unshift and shift use in start of the arry.
aa.push(11)
aa.pop()
aa.unshift(12)
aa.shift()
// console.log(aa);


// find any element in arry use includes
// console.log(aa.includes((12)));

// find the index of the element in arry and no find come -1 if find cme number
// console.log(aa.indexOf(6));

//slice
let a = aa.slice(2, 5)
// console.log(a);
// console.log(aa);

//dirrfent bettwen slice and splice. slice not cut value but splice cut value.

//splice
let b = aa.splice(2, 5)
// console.log(b);
// console.log(aa);


//new propertie convert arry in string
let arr = [10,20,40,50]
let m = arr.join();
console.log(m);
console.log(arr);
