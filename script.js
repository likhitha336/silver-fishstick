const text = document.getElementById("name")
let str = "Hello "
text.addEventListener("keypress", (event)=>{
    str += event.key
})
const greet = document.getElementById("heading")

const submit = document.getElementById("button")
submit.addEventListener("click", () => {
    greet.innerHTML = str;
    document.getElementById("form").reset()
    str = "Hello "
})


// color the boxes 
const blue =  document.getElementById("box-2")
blue.addEventListener("click", (event)=>{
    blue.classList.toggle("blue")
})

const red =  document.getElementById("box-1")
red.addEventListener("click", (event)=>{
    red.classList.toggle("red")
})

const green =  document.getElementById("box-3")
green.addEventListener("click", (event)=>{
    green.classList.toggle("green")
})

const yellow =  document.getElementById("box-4")
yellow.addEventListener("click", (event)=>{
    yellow.classList.toggle("yellow")
})