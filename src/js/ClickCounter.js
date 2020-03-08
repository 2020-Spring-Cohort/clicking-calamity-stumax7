class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.autoClick = () => {
            this.clickCount += this.companionCount;
        };
        this.compounderCost = 10;
        this.compounderCount = 0;
    }
    countClick(){
      return this.clickCount++;
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
    getCompounderCost(){
        return this.compounderCost;
    }
    getCompounderCount(){
        return this.compounderCount;
    }
    buyNewCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCost *= 1.1;
            this.compounderCost = Math.round(this.compounderCost);
            this.compounderCount++;
        }
    }  
}
