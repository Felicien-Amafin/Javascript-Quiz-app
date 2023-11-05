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
                    [ 'page', [ 'page' ] ],
                    [ 'sub-container', [ 'card', 'flex', 'flex__space-ev' ] ], 
                    [ 'tittle', [ 'card__tittle', 'flex' ] ]
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
            );

            UpdateUI.disableButton('button', 'card__button--disabled', 'card__button--enabled');
            //Add event listener to store topic
            document.getElementById('button').addEventListener('click', this.configGameTopic.bind(this));
            //Add event listner to render level page
            document.getElementById('button').addEventListener('click', App.levelPage.updateSettingPage.bind(App.levelPage));
            document.querySelector('footer').classList.add('footer-d-none');
        }, 1500);
    }

    createSubContainer(mainContainerId) {
        const subContainer = document.createElement('div');
        subContainer.id = 'sub-container';
        this.subContainerId = subContainer.id;
        const mainContainer = document.getElementById(`${mainContainerId}`);
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
            UpdateUI.disableButton('button', 'card__button--disabled');
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
        this.updateButton();
    }

    configGameTopic() {
        let topic = document.querySelector('.bubble-selected').textContent;
        topic = topic.toLowerCase();
        this.topic = topic.replaceAll(' ','_');
    }

    configGameLevel() {
        let level = document.querySelector('.bubble-selected').textContent;
        level = level.toLowerCase();
        this.level = level.replaceAll(' ','_');
    }

    updateButton() {
        //update button and remove previous eventListener
        const newButton = document.createElement('button');
        newButton.id = 'button';
        newButton.textContent = 'Start';
        document.getElementById('button').replaceWith(newButton);
         //Add event listener to button to store level
        newButton.addEventListener('click', this.configGameLevel.bind(this));
         //Add event listener to button to display Game Page
        newButton.addEventListener('click', App.gamePage.renderGamePage.bind(App.gamePage));
        UpdateUI.disableButton('button', 'card__button--disabled', 'card__button--enabled');
    }
}