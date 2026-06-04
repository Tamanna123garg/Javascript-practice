let boxes = document.querySelectorAll(".box");
let Reset=document.querySelector("#Reset");

let turnO = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListen("click",() => {
        console.log("Box is Clicked");
        if(turnO){
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disable=true;
    });

});




