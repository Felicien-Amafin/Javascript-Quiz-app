import { UpdateUI } from "./updateUI.js";
import { App } from "./app.js";

export class SettingPage {
    constructor(mainContainerId, h2TextContent, lilist, buttonTextContent) {
        this.mainContainerId = mainContainerId;
        this.h2TextContent = h2TextContent;
        this.lilist = lilist;
        this.buttonTextContent = buttonTextContent;
        this.subContainerId;
    }

    renderSettingPage() {
        setTimeout(()=> {
            document.getElementById('app').classList.remove('app-pos-relative');
            UpdateUI.clearClass([ 'page' ]);
            this.createSubContainer(this.mainContainerId);
            this.renderRootEl(this.subContainerId);
            UpdateUI.updateLiNumber(this.lilist);
            UpdateUI.makeBubbleSelectable();
            this.addStaticTextContent(this.h2TextContent, this.lilist, this.buttonTextContent);
            //Add Ids and className to UpdateUI function
            UpdateUI.applyStyle(
                [   
                    [ 'page', [ 'page', 'page' ] ],
                    [ 'sub-container', [ 'card', 'flex', 'flex__space-ev' ] ], 
                    [ 'tittle', [ 'card__tittle', 'flex' ] ], 
                    [ 'button', [ 'card__button', 'card__button--disabled' ] ]
                ],

                [
                    [
                        'list', 
                        [
                            [ 'card__bubble' ], 
                            [ 'card__bubble' ], 
                            [ 'card__bubble' ], 
                            [ 'card__bubble' ], 
                            [ 'card__bubble' ]
                        ]
                    ]
                ]
            )
            document.getElementById('button').addEventListener('click', this.configGameTopic.bind(this));
            document.getElementById('button').addEventListener('click', App.levelPage.updateSettingPage.bind(App.levelPage));
        }, 1500);
    }

    createSubContainer(mainContainerId) {
        const subContainer = document.createElement('div');
        subContainer.id = 'sub-container';
        this.subContainerId = subContainer.id;
        const mainContainer = document.getElementById(`${mainContainerId}`)
        mainContainer.innerHTML = '';
        mainContainer.appendChild(subContainer);
    }
    
    renderRootEl(containerId) {
        if(!document.querySelector('h2')) {
            const container = document.getElementById(containerId);
            container.innerHTML = `
                <h2 id='tittle'></h2>
                <ul id='list'></ul>
                <button id='button'></button>
            `
            document.querySelector('button').disabled = true;
        }
    } 

    addStaticTextContent(h2texcontent, lilist, buttonTextContent) {
        document.querySelector('h2').textContent = h2texcontent;
        const allLi = document.querySelectorAll('li');
        for(let i = 0; i < allLi.length; i++) {
            allLi[i].textContent = lilist[i];
        }
        const button = document.querySelector('button');
        button.textContent = buttonTextContent;
    }

    updateSettingPage() {
        UpdateUI.updateLiNumber(this.lilist);
        UpdateUI.removeBubbleSelectedClass();
        this.addStaticTextContent(this.h2TextContent, this.lilist, this.buttonTextContent);
        //update button and remove previous eventListener
        const newButton = document.createElement('button');
        newButton.id = 'button';
        newButton.textContent = 'Start';
        document.getElementById('button').replaceWith(newButton);
        newButton.classList.add('card__button','card__button--disabled');
        newButton.addEventListener('click', this.configLevel.bind(this));
        newButton.addEventListener('click', App.gamePage.renderGamePage.bind(App.gamePage));
    }

    configGameTopic() {
        this.topic = document.querySelector('.bubble-selected').textContent;
    }

    configLevel() {
        this.level = document.querySelector('.bubble-selected').textContent;
    }


}