let resultLine = document.getElementById("resultado");
resultLine.textContent="Santiago";
resultLine.style.textAlign = "right";
resultLine.style.verticalAlign = "center";
resultLine.style.fontSize = "30px";
resultLine.style.paddingRight= "2.5px";

let c = document.getElementById("c");
c.addEventListener("click",function(){
    resultLine.textContent = "0"});