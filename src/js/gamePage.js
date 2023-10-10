import { DomHelper} from "./domHelper.js";

export class GamePage {
    constructor(containerId, h2TextContent, lilist, renderNextPage) {
        this.containerId = containerId;
        this.h2TextContent = h2TextContent;
        this.lilist = lilist;
        this.renderNextPage = renderNextPage;
    }

    renderGamePage() {
        this.addMissingPageElements();
    }

    addMissingPageElements() {
        const page = document.getElementById(`${this.containerId}`);
        page.insertAdjacentHTML('afterbegin',`
        <div id="sub-container1">
            <div id="countdown" class="countdown">
                <div id="countdown_outer-circle" class="countdown_outer-circle">
                    <div id="countdown_inner-circle" class="countdown_inner-circle">
                        <span id="countdown_timer" class ="countdown_timer"></span>
                    </div>
                </div>
            </div>
            <h3></h3>
            <p></p>
        </div>
        `);
        
        DomHelper.adjustLiNumber(this.lilist);
        document.getElementById('sub-container').id = 'sub-container2';
        const newButton = document.createElement('button');
        newButton.textContent = 'Validate'; 
        document.querySelector('button').replaceWith(newButton);// Remove previous eventListener
        newButton.addEventListener('click', this.renderNextPage);
    }
}