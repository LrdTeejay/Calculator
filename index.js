function displayValue(value){
   const text = document.getElementById("text"); 
    text.innerHTML += value;    
};
/*var delBtn = document.getElementById("Del");
delBtn.addEventListener("click", (event)=>{
    screen.innerHTML = "";
});*/
let equals = document.getElementById("equals");
equals.addEventListener("click", () =>{
  const text = document.querySelector("#text");
  const txt = text.innerHTML;
  const answer = eval(txt);
  text.innerHTML = answer;
});
const erase = document.getElementById("erase");
const text = document.querySelector("#text");
const txt = text.innerHTML;
erase.addEventListener("click", () =>{
  text.innerHTML = "";
});
const del = document.getElementById("Del");
del.addEventListener("click", () => {
  const myTxt = (value);
  const slice = myTxt.slice(0, 1);
});