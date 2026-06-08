let modebtn = document.querySelector("#mode");
let currmode = "Light";
modebtn.addEventListener("click",()=>{
    if(currmode="Light"){
        currmode="Dark";
    }
    else{
        currmode="Light";
    }
    console.log(currmode);
})