var entry = document.getElementById("entry")
entry.addEventListener("click", (evt)=> {
    evt.preventDefault()
    display()
})
var bank = document.getElementById("output")
var tex1 = document.getElementById("number")
var but = document.getElementById("entry")
var all = document.getElementById("sortAll")
var ODD = document.getElementById("od")
var EVEN = document.getElementById("ev")

let help= []

function list() {
    help.push(bank.innerHTML = tex1.value);
    console.log(help)
}

function list2() {
    EVEN.innerHTML = even.value;
}

function display() {
    var Number = document.getElementById("number").value;
    console.log(Number)
}

function even() {
    const even1 = help.filter(num => num % 2 ===0)
    console.log(even1)
}

document.getElementById("sortOne").addEventListener('click', ()=>{

})

all.addEventListener("click", list2)

but.addEventListener('click', list);


