import { DomHelper } from "./domHelper.js";
import { UpdateUI } from "./updateUI.js";

export class ScorePage {
    constructor(containderId) {
        this.containerId = containderId
    }
    renderScorePage() {
        this.render();
        UpdateUI.clearClass([ 'page' ]);
        
        //Add Ids and className to UpdateUI function
        UpdateUI.applyStyle(
            [   
                [ 'page', [ 'flex', 'flex__space-ev' ] ],
                [ 'appreciation', [ 'appreciation' ] ], 
                [ 'score', [ 'score' ] ], 
                [ 'home-page-butt', [ 'homePage-butt' ] ]
            ],
            false
        );
    }

    render() {
        const container = document.getElementById(`${this.containerId}`);
        container.innerHTML = `
                <h2 id="appreciation">Have to work on it!</h2>
                <p id="score">Number of good response(s):<span></span> </p>
                <button id="home-page-butt">Home Page</button>
        `
        document.getElementById('home-page-butt')
        .addEventListener('click', DomHelper.returnToHomePage.bind(DomHelper.homePageObj));
    }
}