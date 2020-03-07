let appCC = new ClickCount;

const displayClickCount = document.querySelector(".displayCount").innerText = appCC.getClickCount();
document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();
document.querySelector(".displayCompounderCost").innerText = appCC.getCompounderCost();
document.querySelector(".displayCompounderCount").innerText = appCC.getCompounderCount();

const makeButtonAddToClickCount = (displayClickCount, appCC) =>{
    displayClickCount.addEventListener("click", ()=>{
        appCC.countClick();
        displayClickCount();
    });
}


const clickButton = document.querySelector(".click-button");
makeButtonAddToClickCount(clickButton, displayClickCount, appCC);