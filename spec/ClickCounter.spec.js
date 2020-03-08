describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
        jasmine.clock().install();
    })
    afterEach(() => {
        jasmine.clock().uninstall();
    })
    describe('countClick() records clicks and ClickCounter can give the clickCount', () => {
        
        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick();
            expect(underTest.getClickCount()).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.getClickCount()).toBe(2);
        });
    });
    describe('Clicking Companions:', () => {
        it("CompanionCounter should have 0 when new.", () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });
        it("CompanionCounter should have 1 after 100 clicks.", ()=>{
            for(let i = 0; i < 100; i++){
                underTest.countClick();
            }
            underTest.buyNewCompanion();
            expect(underTest.getCompanionCount()).toBe(1);
            expect(underTest.getClickCount()).toBe(0);
        });
        it("Can't buy companion when clickCount is less than 100.", ()=>{
            for (let i = 0; i < 99; i++){
                underTest.countClick();
            }
            underTest.buyNewCompanion();
            expect(underTest.getCompanionCount()).toBe(0);
        });
        it("clickCompanion autoclicks once per second.", ()=>{
            for(let i = 0; i < 100; i++){
                underTest.countClick();
            }
            underTest.buyNewCompanion();
            jasmine.clock().tick(999);
            expect(underTest.getClickCount()).toBe(0);
            jasmine.clock().tick(1);
            expect(underTest.getClickCount()).toBe(1);
        });
    });
    describe('Clicking compounders:', ()=>{
        it("Compounder counter should have 0 when new.", ()=>{
            expect(underTest.getCompounderCount()).toBe(0);
        });
        it("Compounder should have 1 after 10 clicks.", ()=>{
            for(let i = 0; i < 10; i++){
                underTest.countClick();
            }
            underTest.buyNewCompounder();
            expect(underTest.getCompounderCount()).toBe(1);
        });
        it("Can't buy compounder when clickCount is less than 10.", ()=>{
            for (let i = 0; i < 9; i++){
                underTest.countClick();
            }
            underTest.buyNewCompounder();
            expect(underTest.getCompounderCount()).toBe(0);
        });
        it("1 compounder results in clicks worth 1.22 clicks.", ()=>{
            for(let i = 0; i < 10; i++){
                underTest.countClick();
            }
            underTest.buyNewCompounder();
            underTest.countClick();
            expect(underTest.getClickCount()).toBe(1.22);
        });
    });
});