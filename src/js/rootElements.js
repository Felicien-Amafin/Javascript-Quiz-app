import { DomHelper } from "./domHelper.js";

export class RootElement {
    constructor(h2TextContent, lilist, buttonTextContent, renderNextPage ) {
        this.h2TextContent = h2TextContent;
        this.lilist = lilist;
        this.buttonTextContent = buttonTextContent;
        this.renderNextPage = renderNextPage;
    }

    renderRootEl(containerId) {
        if(!document.querySelector('h2')) {
            const container = document.getElementById(containerId);
            container.innerHTML = `
            <h2></h2>
            <ul></ul>
            <button></button>
            `
        }
        
        DomHelper.adjustLiNumber(this.lilist);

        document.querySelector('button').addEventListener('click', this.renderNextPage.bind(this))
    } 

    addStaticTextContent(h2texcontent, lilist, buttonTextContent) {
        document.querySelector('h2').textContent = h2texcontent;
        const allLi = document.querySelectorAll('li');
        for(let i = 0; i < allLi.length; i++) {
            allLi[i].textContent = lilist[i];
        }
        document.querySelector('button').textContent = buttonTextContent;
    }
/* 
    addStyle() {
  
    } */
}