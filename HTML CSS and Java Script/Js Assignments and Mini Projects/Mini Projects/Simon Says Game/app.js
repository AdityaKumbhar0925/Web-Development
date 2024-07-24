let level = 0;
let input = [];
let comp = [];
let started =  false;
let red = document.querySelector("#red")
let orange = document.querySelector("#orange")
let purple = document.querySelector("#purple")
let blue = document.querySelector("#blue")



let boxes = document.querySelectorAll(".box");




document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game has been started");
        started = true;
        level = 1;
    }
});



function randomFlash(lvl){

    setTimeout(() => {
        clearInterval(id);
        console.log("interval cleared");
    }, 1500 * (lvl+1));

    let id = setInterval(() => {

        let rand = Math.floor(Math.random() * 4 );
        let colorId = boxes[rand].id;
        boxes[rand].style.backgroundColor = "white";

        setTimeout(() => {
            boxes[rand].style.backgroundColor = colorId;
        }, 100);

        comp.push(colorId);
        
        
    }, 1500);
}


red.addEventListener("click",function(){
    input.push("red");
    let colorId = red.id;
        red.style.backgroundColor = "white";

        setTimeout(() => {
            red.style.backgroundColor = colorId;
        }, 100);
})
orange.addEventListener("click",function(){
    input.push("orange");
    let colorId = orange.id;
        orange.style.backgroundColor = "white";

        setTimeout(() => {
            orange.style.backgroundColor = colorId;
        }, 100);
})
purple.addEventListener("click",function(){
    input.push("purple");
    let colorId = purple.id;
        purple.style.backgroundColor = "white";

        setTimeout(() => {
            purple.style.backgroundColor = colorId;
        }, 100);
})
blue.addEventListener("click",function(){
    input.push("blue");
    let colorId = blue.id;
        blue.style.backgroundColor = "white";

        setTimeout(() => {
            blue.style.backgroundColor = colorId;
        }, 100);
})




