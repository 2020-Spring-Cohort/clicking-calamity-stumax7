let appCC = new ClickCount;



const clickButton = document.querySelector(".click-button");

const updateClickCount = () =>{
    makeButtonAddCompanion(appCC);
    document.querySelector(".displayCount").innerText = appCC.getClickCount().toFixed(2);
}

// const updateAllCounts = () =>{
//     if(appCC.getClickCount() < appCC.getCompanionCost()){
//         document.querySelector(".buy-companion").disabled = true;
//     } else {
//         document.querySelector(".buy-companion").disabled = false;
//     }
//     if(appCC.getClickCount() < appCC.getCompounderCost()){
//         document.querySelector(".buy-compounder").disabled = true;
//     } else {
//         document.querySelector(".buy-companion").disabled = false;
//     }
//     makeButtonAddCompanion(appCC);
//     document.querySelector(".displayCount").innerText = appCC.getClickCount().toFixed(2);
//     makeButtonAddCompanion(appCC);
//     document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
//     document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
//     makeButtonAddCompounder(appCC);
//     document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();
//     document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();

// }

const makeButtonAddToClickCount = (appCC) =>{
    clickButton.addEventListener("click", ()=>{
        appCC.countClick();
        document.querySelector(".displayCount").innerText = appCC.getClickCount().toFixed(2);
    });
}
makeButtonAddToClickCount(appCC);

const companionButton = document.querySelector(".buy-companion");

const makeButtonAddCompanion = (appCC) =>{
    companionButton.addEventListener("click", ()=>{
        appCC.buyNewCompanion();
        document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
        document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
    });
}
makeButtonAddCompanion(appCC);

const compounderButton = document.querySelector(".buy-compounder");

const makeButtonAddCompounder = (appCC) =>{
    // (appCC.getClickCount() < appCC.getCompounderCost()) ? compounderButton.style.backgroundColor = "black" : compounderButton.style.backgroundColor = "beige";
    compounderButton.addEventListener("click", ()=> {
        appCC.buyNewCompounder();
        document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();
        document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
    });
}
makeButtonAddCompounder(appCC);

// const resetButton = document.querySelector(".reset");

// const makeResetButtonResetGame = (resetButton) =>{
//     resetButton.addEventListener("click", ()=> {
//        location.reload();
//     });
// } 

document.querySelector(".displayCount").innerText = appCC.getClickCount(); 
document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();

let aboutCCCButton = document.getElementById('alert1');
aboutCCCButton.onclick = function(){
    alert("Coo Coo Computing Challengers makes a variety of tributes to classic web apps.")
}
let aboutDevButton = document.getElementById('alert2');
aboutDevButton.onclick = function(){
    alert("Stuart Maxwell loves to click buttons ad nauseam and wants to share that love with the world.")
}
let inspirationButton = document.getElementById('alert3');
inspirationButton.onclick = function(){
    alert("https://orteil.dashnet.org/cookieclicker/")
}
