import { UpdateUI } from "./updateUI.js";
import { QuestionHandler } from "./questionHandler.js";
import { CountdownHandler } from "./countdownHandler.js";
import { App } from "./app.js";

export class GamePage {
    constructor(containerId, lilist) {
        this.containerId = containerId;
        this.lilist = lilist;
    }

    renderGamePage() {
        this.addMissingPageElements();
        UpdateUI.clearClass([ 'page', 'sub-container2' ], [ 'sub-container2', 'list' ]);
        UpdateUI.updateLiNumber(this.lilist);
        //Add Ids and clasName to UpdateUI function
        UpdateUI.applyStyle(
            [   [ 'page', [ 'game-page' ] ],
                [ 'sub-container1', [ 'block1', 'flex' ] ],
                [ 'sub-container2', [ 'block2', 'flex' ] ]
            ],
          
            [
                [
                    'sub-container1',
                    [
                        [ 'block1__countdown' ],
                        [ 'block1__qust-counter' ],
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
                        []
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

        UpdateUI.disableButton('button', 'block2__button--disabled', 'block2__button--enabled');
        UpdateUI.buttonClicked = true;
        QuestionHandler.lauchQuestionHandler();
        CountdownHandler.launchCountdown();
        App.scorePage.initScore();
        document.getElementById('button').addEventListener('click', this.pagesHandler.bind(this));
    }

    addMissingPageElements() {
        const page = document.getElementById(`${this.containerId}`);
        //Add countdown + question counter in subcontainer1
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
            </div>
        `);

        //Update elements for subcontainer2
        document.getElementById('sub-container').id = 'sub-container2';
        document.getElementById('tittle').id = 'question';
        const newButton = document.createElement('button');
        newButton.textContent = 'Validate'; 
        newButton.id = 'button';
        document.querySelector('button').replaceWith(newButton); // Remove previous eventListener
    }

    updateGamePage() {
        if(!document.getElementById('button').disabled) {
            UpdateUI.disableButton('button', 'block2__button--disabled', 'block2__button--enabled');
        }

        UpdateUI.giveResponseFeedback();

        setTimeout(()=>{
            UpdateUI.removeResponseFeedBack();
            UpdateUI.toggleBubbleUnclickable();
            QuestionHandler.fetchSingleQuestionFromArray();
            QuestionHandler.questionDisplayHandler();
            CountdownHandler.launchCountdown();
        }, 4000);
    }

    pagesHandler() {
        if((QuestionHandler.questionCount + 1) === QuestionHandler.filteredQuestions.length) {
            UpdateUI.disableButton('button', 'block2__button--disabled', 'block2__button--enabled');
            UpdateUI.giveResponseFeedback();

            setTimeout(()=>{
                App.scorePage.renderScorePage();
            }, 4000);
            
        } else {
            this.updateGamePage();
        }
    }
}