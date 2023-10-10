import { DomHelper } from "./domHelper.js";

export class ScorePage {
    constructor(containderId) {
        this.containerId = containderId
    }

    render() {
        const container = document.getElementById(`${this.containerId}`);
        container.innerHTML = `
        <h2></h2>
        <h3></h3>
        <button id='home-page-butt'>Home Page</button>
        `
        document.getElementById('home-page-butt')
        .addEventListener('click', DomHelper.returnToHomePage.bind(DomHelper.homePageObj));
    }
}