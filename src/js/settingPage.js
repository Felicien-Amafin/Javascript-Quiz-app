import { RootElement } from './rootElements.js'

export class SettingPage extends RootElement {
    constructor(mainContainerId, h2TextContent, lilist, buttonTextContent, renderNextPage) {
        super(h2TextContent, lilist, buttonTextContent, renderNextPage);
        this.mainContainerId = mainContainerId;
        this.subContainerId;
    }

    createSubContainer(mainContainerId) {
        const subContainer = document.createElement('div');
        subContainer.id = 'sub-container';
        this.subContainerId = subContainer.id;
        const mainContainer = document.getElementById(`${mainContainerId}`)
        mainContainer.innerHTML = '';
        mainContainer.appendChild(subContainer);
    }
    
    renderSettingPage() {
        this.createSubContainer(this.mainContainerId);
        this.renderRootEl(this.subContainerId);
        this.addStaticTextContent(this.h2TextContent, this.lilist, this.buttonTextContent);
        /* this.addStyle(); */
    }
}