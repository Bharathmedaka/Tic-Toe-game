let btns = document.querySelectorAll(".btn");
let turn_O = true;
let newbtn = document.querySelector("#newbtn");
let container = document.querySelector(".msg-container");
let para = document.querySelector("#para");
let rst = document.querySelector("#rst");
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turn_O = true;
    enable_btns();
    container.classList.add("hide");
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
       
        if (turn_O === true){
            btn.innerText = "O";
            turn_O = false;
        }
        else{
            btn.innerText = "X";
            turn_O = true;
        }
        btn.disabled = true;

        checkwinner();
    });
});
const disabled_btns = () => {
    for (let btn of btns){
        btn.disabled = true;
    };
};
const enable_btns = () => {
    for (let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    };
};
const showwinner = (winner) =>{
    para.innerText = `Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    disabled_btns();
};

const checkwinner = () => {
    for (let pattern of winpatterns){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
    
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val == pos3val){
             
                showwinner(pos1val);
            }
        }
    
    }
};

newbtn.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);