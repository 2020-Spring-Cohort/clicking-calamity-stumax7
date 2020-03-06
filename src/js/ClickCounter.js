class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.autoClick = () => {
            this.clickCount += this.companionCount;
        };
    }
    countClick() {
        this.clickCount++;
        
    }
    getClickCount(){
        return this.clickCount;
    }
    getCompanionCount(){
        return this.companionCount;
    }
    getCompanionCost(){
        return this.companionCost;
    }
    buyNewCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCost *= 1.1;
            this.companionCost = Math.round(this.companionCost);
            this.companionCount++;
            let timer = setInterval(this.autoClick, 1000);
        }
    }   
}
