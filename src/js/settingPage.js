import { UpdateUI } from "./updateUI.js";

export class SettingPage {
    constructor(mainContainerId, h2TextContent, lilist, buttonTextContent, renderNextPage) {
        this.mainContainerId = mainContainerId;
        this.h2TextContent = h2TextContent;
        this.lilist = lilist;
        this.buttonTextContent = buttonTextContent;
        this.renderNextPage = renderNextPage;
        this.subContainerId;
    }

    renderSettingPage() {
        this.createSubContainer(this.mainContainerId);
        this.renderRootEl(this.subContainerId);
        UpdateUI.updateLiNumber(this.lilist);
        this.addStaticTextContent(this.h2TextContent, this.lilist, this.buttonTextContent);
        UpdateUI.clearClass([ 'page' ]);
        document.getElementById('app').classList.remove('app');
        //Add Ids and className to UpdateUI function
        UpdateUI.applyStyle(
            [   
                [ 'page', [ 'page' ] ],
                [ 'sub-container', [ 'card', 'flex', 'flex__space-ev' ] ], 
                [ 'tittle', [ 'card__tittle', 'flex' ] ], 
                [ 'button', [ 'card__button' ] ]
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
        button.addEventListener('click', this.renderNextPage.bind(this));
    }

    updateSettingPage() {
        UpdateUI.updateLiNumber(this.lilist);
        this.addStaticTextContent(this.h2TextContent, this.lilist, this.buttonTextContent);
    }
}