import { Countdown } from "./countdown.js";
import { App } from "./app.js";
import { UpdateUI } from "./updateUI.js";


export class CountdownHandler {
    constructor() {
        this.countdownObj;
    }

    static createCountdownObj() {
        this.countdownObj = new Countdown('', 20, 1000);
    }

    static launchCountdown() {
        if(!this.countdownObj) {
            this.createCountdownObj();
        }

        const timer = document.getElementById('countdown_timer');
        const progressCircle = document.getElementById('countdown_outer-circle');
        let interval;
        let seconds = CountdownHandler.countdownObj.totalSeconds;
        const speed = CountdownHandler.countdownObj.speed;
        timer.textContent= '20';//Initialize timer to 20 seconds
        progressCircle.style.background= 'orange';

        interval = setInterval(()=> {
                        seconds --;
                        timer.textContent = `${seconds}` ;
                        progressCircle.style.background = `
                            conic-gradient(
                                orange ${seconds * 18}deg, 
                                rgba(255, 166, 0, 0.541) ${seconds * 18}deg
                            )
                        `;
                        if(timer.textContent === '0') {
                            UpdateUI.buttonClicked = false;
                            this.stopCountdown(interval);
                            App.gamePage.pagesHandler();
                        }
                    }, speed); 
                    
        const button = document.getElementById('button');
        button.addEventListener('click', this.stopCountdown.bind(null, interval));
    }

    static stopCountdown(interval) {
        clearInterval(interval);
    }
}