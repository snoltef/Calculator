let resultLine = document.getElementById("resultado");
resultLine.textContent="Santiago";
resultLine.style.textAlign = "right";
resultLine.style.verticalAlign = "center";
resultLine.style.fontSize = "30px";
resultLine.style.paddingRight= "2.5px";

let c = document.getElementById("c");
c.addEventListener("click",function(){
    resultLine.textContent = "0"});

let seven = document.getElementById("seven");
seven.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "7"}
    else{
    resultLine.textContent = resultLine.textContent + "7"}
});

let eight = document.getElementById("eight");
eight.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "8"}
    else{
    resultLine.textContent = resultLine.textContent + "8"}
});

let nine = document.getElementById("nine");
nine.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "9"}
    else{
    resultLine.textContent = resultLine.textContent + "9"}
});

let four = document.getElementById("four");
four.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "4"}
    else{
    resultLine.textContent = resultLine.textContent + "4"}
});

let five = document.getElementById("five");
five.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "5"}
    else{
    resultLine.textContent = resultLine.textContent + "5"}
});

let six = document.getElementById("six");
six.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "6"}
    else{
    resultLine.textContent = resultLine.textContent + "6"}
});

let one = document.getElementById("one");
one.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "1"}
    else{
    resultLine.textContent = resultLine.textContent + "1"}
});

let two = document.getElementById("two");
two.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "2"}
    else{
    resultLine.textContent = resultLine.textContent + "2"}
});

let three = document.getElementById("three");
three.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "3"}
    else{
    resultLine.textContent = resultLine.textContent + "3"}
});

let zero = document.getElementById("zero");
zero.addEventListener("click",function(){
    if(resultLine.textContent.charAt(0)==0){resultLine.textContent = "0"}
    else{
    resultLine.textContent = resultLine.textContent + "0"}
});

let dot = document.getElementById("dot");
dot.addEventListener("click",function(){
    if(resultLine.textContent.chartAt(0)==0){
    resultLine.textContent = resultLine.textContent + "."}
});


let equal = document.getElementById("equal");
equal.addEventListener("click",function(){
    resultLine.textContent = "total"
});