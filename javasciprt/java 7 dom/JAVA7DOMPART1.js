// console.log(window);
// console.dir(window);
// console.dir(document);
// console.log(document);

console.log(document.body.style.background = "red");
// console.dir(document.body.firstChild);
// console.dir(document.body.lastChild);

// dom multipatiton

//id selector
// let id = document.getElementById("id")
// console.dir(id);

// // //class seloctors"
// let clas = document.getElementsByClassName("clas")
// console.dir(clas); 
// console.log(clas);

// selecting with tag
// let tags = document.getElementsByTagName("p")
// console.dir(tags);
// console.log(tags);



//quary selotors

//not all quary seotors
// let ele = document.querySelector("p")// 1 wala p karoga not all
// console.dir(ele);
// console.log(ele);

// all quary Selector.  and in quary Selector use class fist. than he selected same applied in id
// let element = document.querySelectorAll("p")// all quary seletors
// console.dir(element);
// console.log(element);


// dom properties 

// 1 properti tagName

// let rr = document.querySelector("P")
// console.dir(rr);
// console.log(rr);
// console.log(rr.tagName);


// 2 and 3 properties .ineerText and .innerhtml

// let t = document.querySelector("div")
// console.dir(t);
// console.dir(t.innerText);
// // console.dir(t.innerText = "become") //pratical use of innnertext

/* start innerhtml*/
// console.dir(t.innerHTML);
// console.dir(t.innerHTML = "<div>  become a new div </div>");// //pratical use of htmltext

//4 propertie textcontant
// let heading = document.querySelector("h1")
// console.dir(heading);
// console.log(heading);
// console.dir(heading.textContent);

//praties
/*q1*/
let h2 = document.querySelector("h2")
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from apna collage"

/*q2*/
let boxes = document.querySelectorAll(".box")

let count = 1;
for (const lf of boxes) {
    lf.innerText = `new boxes ${count}`
    count++
}