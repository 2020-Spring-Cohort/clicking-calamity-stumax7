let appCC = new ClickCount;



const clickButton = document.querySelector(".click-button");

const makeButtonAddToClickCount = (appCC) =>{
    clickButton.addEventListener("click", ()=>{
        appCC.countClick();
        document.querySelector(".displayCount").innerText = appCC.getClickCount();

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

document.querySelector(".displayCount").innerText = appCC.getClickCount(); 
document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();