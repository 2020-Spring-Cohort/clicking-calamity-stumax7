let appCC = new ClickCount;



const clickButton = document.querySelector(".click-button");

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
    compounderButton.addEventListener("click", ()=> {
        appCC.buyNewCompounder();
        document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();
        document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
      
    });
}
makeButtonAddCompounder(appCC);

document.querySelector(".displayCount").innerText = appCC.getClickCount(); 
document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();