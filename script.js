/* let reset=document.querySelector("#reset");
let increase=document.querySelector("#increase");
let decrease=document.querySelector("#decrease");
var number=document.querySelector(".number");

reset.addEventListener('click',()=>{
    number.innerHTML=0;
    color();
})

increase.addEventListener('click',()=>{
    number.innerHTML=parseInt(number.innerHTML)+1;
    color();
})

decrease.addEventListener('click',()=>{
    number.innerHTML=parseInt(number.innerHTML)-1;
    color();
})


function color(){
    

    
     
    if(number.innerHTML<0)
     {    
        number.style.color="red";
     }
     else if(number.innerHTML>0)
     {
        number.style.color="green";
     }
     else
     {
        number.style.color="#222";
     }
} */

let count=0;

const value=document.querySelector(".number");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener("click",function(e){
       const styles=e.currentTarget.classList;
       if(styles.contains("decrease")){
         count--;
       }
       else if(styles.contains("increase")){
          count++;
       }
       else{
         count=0;
       }
       if(count>0)
       {
         value.style.color="green";
       }
       else if(count<0)
       {
        value.style.color="red";
       }
       else
       {
        value.style.color="#222";
       }
       value.textContent=count;
    });
});