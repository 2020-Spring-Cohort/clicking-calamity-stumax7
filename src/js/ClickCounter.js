class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.clickValue = 1;
        console.log("In constructor")
        this.autoClick = () => {
            this.clickCount += this.companionCount;
            // document.getElementById("displayCount").innerHTML = this.clickCount;
            console.log(this.clickCount)
        };
    }
    countClick() {
        this.clickCount++;
        // document.getElementById("displayCount").innerHTML = this.clickCount;
    }
    getClickCount(){
        return this.clickCount;
    }
    getCompanionCount(){
        return this.companionCount;
    }
    buyNewCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCost *= 1.1;
            this.companionCost = Math.round(this.companionCost);
            this.companionCount++;
            let timer = setInterval(this.autoClick, 1000);
            // document.getElementById("displayCompanionCost").innerHTML = this.companionCost;
            // document.getElementById("displayCount").innerHTML = user.clickCount;
            // document.getElementById("displayCompanionCount").innerHTML = this.companionCount;
        }
    }   
}
