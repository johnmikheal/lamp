let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let audio = document.querySelector("#audio")
console.log(body);
console.log(btn);
btn.onclick = function(){
body.classList.toggle("on")
audio.play();

};