let btn =  document.querySelector("button");

function randomCode(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green  = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}

function randomColor(){
    let randomColor = randomCode();
    document.querySelector("h3").innerText = randomColor;
    document.querySelector("div").style.backgroundColor = randomColor;
}

btn.addEventListener("click", randomColor);

