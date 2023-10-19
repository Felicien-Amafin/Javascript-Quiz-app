
export class DomHelper {
    constructor() {
        this.returnToHomePage;
        this.homePageObj;
    }

    static storeHomePage(renderHomePageFunc) {
        this.returnToHomePage = renderHomePageFunc;
    }
}

