
export class DomHelper {
    constructor() {
        this.returnToHomePage;
        this.homePageObj;
    }

    static storeHomePage(renderHomePageFunc) {
        this.returnToHomePage = renderHomePageFunc;
    }

    static adjustLiNumber(liList) {
        if(document.querySelector('ul').innerHTML !== '') {
            const licount = document.querySelectorAll('li');
            const liAddOrRetrieve =  Math.abs(licount.length - liList.length);
            if(licount.length < liList.length) {
                for(let i = 0; i < liAddOrRetrieve; i ++) {
                  document.querySelector('ul').insertAdjacentHTML('beforeend', '<li></li>');
                }
            } else if(licount.length > liList.length) {
                for(let i = 0; i < liAddOrRetrieve; i ++) {
                    licount[i].remove();
                }
            }
        } else {
            const ul = document.querySelector('ul') 
            for(let i = 0; i < liList.length; i ++) {
                ul.insertAdjacentHTML('beforeend', '<li></li>');
            }
        }
    }
}

