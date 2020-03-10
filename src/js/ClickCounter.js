class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCost = 100;
        this.companionCount = 0;
        this.autoClick = () => {
            this.clickCount += (this.companionCount * this.getCompounderMultiplier());
            updateClickCount();
        };
        this.compounderCost = 10;
        this.compounderCount = 0;
    }
    countClick(){
        this.clickCount += this.getCompounderMultiplier();
        updateClickCount();
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
            updateClickCount();
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
            updateClickCount();
        }
   
    }  
    getCompounderMultiplier(){
        return 1.2**this.getCompounderCount();
    }
    // resetClickCount(){
    //    return this.clickCount = 0; 
    // }
    // resetCompanionCost(){
    //     return this.companionCost = 100;
    // }
    // resetCompanionCount(){
    //     return this.companionCount = 0;
    // }
    // resetCompounderCost(){
    //     return this.compounderCost = 10;
    // }
    // resetCompounderCount(){
    //     return this.compounderCount = 0;
    // }
    // resetAllCounts(){
    //     this.resetClickCount();
    //     this.resetCompanionCost();
    //     this.resetCompanionCount();
    //     this.resetCompounderCost();
    //     this.resetCompounderCount();
    // }
}
