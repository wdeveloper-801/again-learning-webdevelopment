// from chatgpt event give me

// 🖱️ Mouse Events
element.addEventListener('click', function() {});
element.addEventListener('dblclick', function() {});
element.addEventListener('mouseover', function() {});
element.addEventListener('mouseout', function() {});

// ⌨️ Keyboard Events
document.addEventListener('keyup', function() {});
document.addEventListener('keydown', function() {});

// 📝 Form/Input Events
inputElement.addEventListener('input', function() {});
inputElement.addEventListener('change', function() {});
formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form submit
});

// 🌐 Window/Page Events
window.addEventListener('load', function() {});
document.addEventListener('DOMContentLoaded', function() {});
window.addEventListener('scroll', function() {});




//patices dark/light/blue mode button
let btn = document.querySelector(".b1")
let currmode = "light";

btn.addEventListener('click',  () => {
    if (currmode == "light") {
        currmode = "dark"
        document.querySelector("body").classList.add("black")
        document.querySelector("body").classList.remove("white","blue")
    }else if (currmode == "dark") {
        currmode = "blue"
        document.querySelector("body").classList.add("blue")
        document.querySelector("body").classList.remove("black")
    } else {
        currmode = "light"
        document.querySelector("body").classList.add("white")
        document.querySelector("body").classList.remove( "blue","black")
    }
    console.log(currmode);
})