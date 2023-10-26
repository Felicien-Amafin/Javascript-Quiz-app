import { App } from "./app.js";
import { UpdateUI } from "./updateUI.js";


export class HomePage {
    constructor(containderId) {
        this.containerId = containderId
    }

    renderHomePage() {
        this.renderRootEl();

        if(document.getElementById('page').className !== '') {
            UpdateUI.clearClass([ 'page' ], false);
        }
        //Add Ids and className to UpdateUI function
        UpdateUI.applyStyle(
            [  
                [ 'app', [ 'app-pos-relative'] ],
                [ 'page', [ 'page', 'page'] ],
                [ 'overlay', [ 'flex', 'flex__gap100', 'overlay'] ],
                [ 'buttons', [ 'flex', 'flex-buttons' ] ]
            ],

            [
                [ 'h1', [ [ 'h1__prt1' ], [ 'h1__prt2' ] ] ], 
                [ 'buttons', [ [ 'play-butt' ], [ 'rules-butt' ] ] ]
            ]
        );
    }

    renderRootEl() {
        const container = document.getElementById(`${this.containerId}`);
        container.innerHTML = `
            <div id="overlay">
                <h1 id="h1" class="h1">
                    <span id="h1__part1">Let's</span> 
                    <span id="h1__part2">Quizz</span>
                </h1>
                <div id="buttons">
                    <button id="play">Play</button>
                    <button id="rules">Rules</button>
                </div>
            </div>
        `
        document.getElementById('play').addEventListener(
            'click', 
            ()=> { 
                document.getElementById('play').className = 'play-butt--active';
            } 
        );
        const subContainer = document.getElementById('overlay');
      
        document.getElementById('rules').addEventListener('click', this.displayRulesAlert.bind(null, subContainer, 'rules-alert'));
        document.getElementById('play').addEventListener('click', App.topicPage.renderSettingPage.bind(App.topicPage));
    }

    displayRulesAlert(container, templateId) {
        const alertTemplate = document.getElementById(`${templateId}`);
        const alertBox = alertTemplate.content.cloneNode(true);
        container.appendChild(alertBox);

        UpdateUI.applyStyle(
            [
                [ `${container.id}`, [ 'overlay__show-up' ] ],

                [ 'alert-box', [ 'alert-box', 'flex', 'flex__space-ev' ] ]
            ],

            [
                [ 'alert-box', [ [ 'alert-box__tittle' ], [ 'alert-box__message' ], [ 'alert-box__butt' ] ] ], 
            ]
        );
        
        document.getElementById('alert-butt').addEventListener('click', ()=> {
            document.getElementById('overlay').classList.remove('overlay__show-up');
            document.getElementById('alert-box').remove();
        })
    }
}
