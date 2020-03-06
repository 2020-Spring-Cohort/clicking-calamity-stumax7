let appCC = new ClickCount;

const displayClickCount = document.querySelector(".displayCount").innerText = appCC.getClickCount();
document.querySelector(".displayCompanionCost").innerText = appCC.getCompanionCost();
document.querySelector(".displayCompanionCount").innerText = appCC.getCompanionCount();

const makeButtonAddToClickCount = (displayClickCount, appCC) =>{
    displayClickCount.addEventListener('click', ()=>{
        appCC.countClick();
    });
}


const clickButton = document.querySelector(".click-button");
makeButtonAddToClickCount(clickButton, displayClickCount, appCC);