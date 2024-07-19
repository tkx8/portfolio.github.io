const menu=document.querySelector("#menu");
const nav=document.querySelector(".links");
const submitBtn=document.querySelector(".submitBtn");

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

submitBtn.onclick=()=>{

    document.querySelectorAll("input").forEach(element => {
        element.value="";
    });
    
    
}