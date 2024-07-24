let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list= document.querySelector("ul");

btn.addEventListener("click", addTask)

function addTask(){
    let task = inp.value;
    let li = document.createElement("li");
    let del = document.createElement("button");

    del.innerText = "done";
    li.innerText = task;

    list.append(li);
    li.append(del);
    inp.value = "";

    del.addEventListener("click", function(){
        list.removeChild(li);
    })

}

