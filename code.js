const view1=document.getElementById("view1");

console.log(view1);
const view2=document.querySelector(".view")
console.log(view2);
const change=view1.querySelector("div:nth-of-type(2n)");
const go=view1.querySelector("div:nth-of-type(1)");
console.log(go);
console.log(change);
const dosomething=()=>{
    alert("doing something");
}
change.style.backgroundColor="blue";
change.addEventListener("click",(event)=>{console.log(event.target);
    event.target.textContent="lmao";
})
go.addEventListener("click",(event)=>{event.target.textContent="lol";

})
