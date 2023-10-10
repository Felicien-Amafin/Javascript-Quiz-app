import { DomHelper } from "./domHelper.js";


export class HomePage {
    constructor(containderId, renderNextPage) {
        this.containerId = containderId,
        this.renderNextPage = renderNextPage;
        this.render();
        DomHelper.homePageObj = this;
        DomHelper.storeHomePage(this.render);
    }
    render() {
        const container = document.getElementById(`${this.containerId}`);
        container.innerHTML = `
        <h1>
            <span>Let's<span> 
            <span>Quizz<span>
        </h1>
        <button id='play'>Play</button>
        <button id='rules'>Rules</button>
        `
        document.getElementById('play').addEventListener('click', this.renderNextPage );
    }
}
