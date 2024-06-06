var text = document.querySelector("div");
var small=document.querySelector(".largbtn");
var larg = document.querySelector(".smallbtn");

function smallbtn() {
    text.classList.remove("larger")
      text.classList.add("smaller");
}
 function largbtn() {
     text.classList.add("larger")
     text.classList.remove("smaller");
}
 

larg.onclick = largbtn;
small.onclick = smallbtn;