let btn=document.querySelector("button");
let ul=document.querySelector("ul")
let input=document.querySelector(".text");
btn.addEventListener("click",()=>{
    let item=document.createElement("li");
    item.innerText=input.value;


    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";
});

// let delbtns=document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click",()=>{
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };

ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});