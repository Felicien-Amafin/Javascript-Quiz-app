import { DomHelper} from "./domHelper.js";
import { UpdateUI } from "./updateUI.js";

export class GamePage {
    constructor(containerId, h2TextContent, lilist, renderNextPage) {
        this.containerId = containerId;
        this.h2TextContent = h2TextContent;
        this.lilist = lilist;
        this.renderNextPage = renderNextPage;
    }

    renderGamePage() {
        this.addMissingPageElements();
        UpdateUI.updateLiNumber(this.lilist);
        UpdateUI.clearClass([ 'page','sub-container2' ], [ 'sub-container2', 'list' ])
        
        //Add Ids and clasName to UpdateUI function
        UpdateUI.applyStyle(
            [   [ 'page', [ 'flex', 'flex__gap35' ] ],
                [ 'sub-container1', [ 'block1', 'flex', 'flex__gap24' ] ],
                [ 'sub-container2', [ 'block2', 'flex', 'flex__gap24' ] ]
            ],
          
            [
                [
                    'sub-container1',
                    [
                        [ 'block1__countdown' ],
                        [ 'block1__qust-counter' ],
                        [ 'block1__rsp-feedback' ],
                    ]
                ],
                [
                    'countdown',
                    [
                        [ 'countdown_outer-circle' ]
                    ]
                ],
                [
                    'countdown_outer-circle',
                    [
                        [ 'countdown_inner-circle' ]
                    ]
                ],
                [
                    'countdown_inner-circle',
                    [
                        [ 'countdown_timer' ]
                    ]
                ],
                [
                    'question-count',
                    [
                        [ 'qust-counter-p1' ],
                        [ 'qust-counter-p2' ] 
                    ]
                ],
                [
                    'sub-container2',
                    [
                        [ 'block2__question' ],
                        [],
                        [ 'block2__button' ]
                    ]
                ],
                [
                    'list',
                    [
                        [ 'block2__bubble' ],
                        [ 'block2__bubble' ],
                        [ 'block2__bubble' ],
                        [ 'block2__bubble' ]
                    ]
                ]

            ]
        );
    }

    addMissingPageElements() {
        const page = document.getElementById(`${this.containerId}`);
        page.insertAdjacentHTML('afterbegin',`
            <div id="sub-container1">
                <div id="countdown">
                    <div id="countdown_outer-circle">
                        <div id="countdown_inner-circle">
                            <span id="countdown_timer"></span>
                        </div>
                    </div>
                </div>
                <h3 id="question-count">
                    <span id="q-count-prt1"></span>
                    <span id="q-count-prt2">/20</span>
                </h3>
                <p id="feedback">Good!</p>
            </div>
        `);
        
        document.getElementById('sub-container').id = 'sub-container2';
        const newButton = document.createElement('button');
        newButton.textContent = 'Validate'; 
        newButton.id = 'validate-butt';
        document.querySelector('button').replaceWith(newButton);// Remove previous eventListener
        newButton.addEventListener('click', this.renderNextPage);
    }
}