/* Attribute have 2 properties */

/* 1 Attribute */
// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));

/* 2 Attribute*/
// let para = document.querySelector("p")
// para.setAttribute("class", "changed")
// console.log(para);


/*style*/
// let div = document.querySelector("p")
// div.style.background ="purple"
// div.style.color = "white"


/* insert elements there are 4 properties   append,prepend,before,after */
// let btn = document.createElement("button")
// btn.innerText = "click me"
// console.log(btn);

// let div = document.querySelector(".para")
// div.append(btn)
// div.prepend(btn)
// div.before(btn)
// div.after(btn)
// div.remove();


//praties
// q1 create a button element. give it a text "click me", background color of red and text color of white. insert the button as a first element
let btn = document.createElement("button")
btn.innerText = "Click me!"
btn.style.backgroundColor = "red"
btn.style.color = "white"
document.querySelector("body").prepend(btn)



//q2  classlist
let mm = document.querySelector(".how")
// mm.classList.add("now")
mm.classList.add("now")


