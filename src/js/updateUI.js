export class UpdateUI {
    static makeBubbleSelectable() {
        const bubbleList = document.querySelectorAll('li');
        for(const bubble of bubbleList ) {
            bubble.addEventListener('click', UpdateUI.applyBubbleSelectedClass);
        }
    }

    static applyBubbleSelectedClass(clickEvent) {
        if(document.querySelector('.bubble-selected')) {
            document.querySelector('.bubble-selected').classList.remove('bubble-selected');
        }
        clickEvent.target.classList.toggle('bubble-selected');
        
        const button = document.getElementById('button');
        button.disabled = false;
        if(document.getElementById('page').className === 'game-page') {
            //Handles disabled/enabled class for gamepage button
            button.classList.remove('block2__button--disabled');
            button.classList.add('block2__button--enabled');
        } else {
            //Handles disabled/enabled class for setting page button
            button.classList.remove('card__button--disabled');
            button.classList.add('card__button--enabled');
        }
    }

    static removeBubbleSelectedClass() {
        if(document.querySelector('.bubble-selected')) {
            document.querySelector('.bubble-selected').classList.remove('bubble-selected');
        }
    }

    static applyStyle(prtsNodesClasses, chldsNodesClasses) {
        const parents = prtsNodesClasses;
        const childs = chldsNodesClasses;
        const styleData = {
            id: '',
            class: ''
        };
        let key;

        // Apply style to parents node
        if(parents) {
            for(let i = 0; i < parents.length; i ++) {
                for(let x = 0; x < parents[i].length; x ++) {
                    key = Object.keys(styleData)[x]; // Storing key name of styleObj in key variable ;
                    styleData[key] = parents[i][x]; // assigning value to styleObj's keys;
                }
                document.getElementById(`${styleData.id}`).classList.add(...styleData.class);
            }
        }

        // Apply style to childNode
        if(childs) {
            for(let i = 0; i < childs.length; i ++) {
                for(let x = 0; x < childs[i].length; x ++) {
                    key = Object.keys(styleData)[x]; // Storing key name of styleObj in key variable ;
                    styleData[key] = childs[i][x]; // assigning value to styleObj's keys;
                }
                let index = 0;
                const parentNode = document.getElementById(`${styleData.id}`);
                for(const child of parentNode.children) {
                    if(styleData.class[index].length > 0) {
                        child.classList.add(...styleData.class[index]);
                    }
                    index ++;
                }
            }
        }
    }

    static updateLiNumber(liList) {
        if(document.querySelector('ul').innerHTML !== '') {
            const licount = document.querySelectorAll('li');
            const liAddOrRetrieve =  Math.abs(licount.length - liList.length);
            let newLi;
            if(licount.length < liList.length) {
                for(let i = 0; i < liAddOrRetrieve; i ++) {
                    newLi = document.createElement('li');
                    newLi.addEventListener('click', UpdateUI.applyBubbleSelectedClass);
                    document.querySelector('ul').insertAdjacentElement('beforeend', newLi);  
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

    static clearClass(prtsNodesId, chldsParentId) {
        if(prtsNodesId) {
            for(let i = 0; i < prtsNodesId.length; i ++) {
                document.getElementById(`${prtsNodesId[i]}`).setAttribute('class', '');
            }
        }
        
        if(chldsParentId) {
            let parentNode;
            for(let i = 0; i < chldsParentId.length; i ++) {
                parentNode = document.getElementById(`${chldsParentId[i]}`)
                for(const child of parentNode.children) {
                    child.setAttribute('class', '');
                }
            }
        }
    }

    static disableButton(buttonid, buttonClass) {
        const button = document.getElementById(`${buttonid}`);
        button.disabled = true;
        button.classList.add(`${buttonClass}`);
    }
}