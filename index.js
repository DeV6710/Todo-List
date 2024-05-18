let inp = document.getElementById("inp")
let tx = document.getElementById("tx")
let sub = document.getElementById("sub")
let todos = document.getElementById("todos")
console.log(todos)


sub.addEventListener("click",function(){
    let tx_v = tx.value;
    let x = document.createElement("h1")
    x.classList.add("active")
    todos.append(x)
    x.innerText = tx_v;
    console.log(x)
    tx.value = "";
    x.addEventListener("dblclick",function(){
        todos.removeChild(x)
    })
})
