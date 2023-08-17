const box=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
const start=document.querySelector(".start");

for(i=0;i<box.length;i++){
let num=Math.floor(Math.random()*16)
//FRONT OF CARD
box[i].onclick=(e)=>{
e.target.classList.add("active")
if(e.target.classList.contains("active")){
setTimeout(()=>{
e.target.classList.add("rotate")
},1000)

//BACK OF CARD
setTimeout(()=>{
const time=1000;
const count=1000;
e.target.innerHTML=num;
if(e.target.innerHTML == 15){
console.log("number 15")        //unfinish
const image=document.createElement("img")
e.target.appendChild(image);
const images=document.querySelector("img")
images.setAttribute("class","imgActive")
}
else if(e.target.innerHTML == 0){
e.target.innerHTML="BOKYA"
}
e.target.style.opacity="0.7"
e.target.classList.remove("animate")
},1200)

}
}
}

// RESET BUTTON
reset.onclick=()=>{
location.reload();
}

//START BUTTON
start.onclick=()=>{
alert("Do you want to play Jimmy's game?")
 location.reload();
}