import { Countdown } from "./countdown.js";

export class CountdownHandler {
    constructor() {
        this.countdownObj;
    }

    static createCountdownObj() {
        this.countdownObj = new Countdown('', 20, 1000);
    }

    static launchCountdown() {
        this.createCountdownObj();
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
                            this.stopCountdown(interval, timer.textContent);
                            /* gamePage.updatePage(); */
                        }
                    }, speed); 
            
            const button = document.querySelector('button');
            button.addEventListener('click', this.stopCountdown.bind(null, interval));
        }

        static stopCountdown(interval, timerState) {
            this.countdownObj.timerState = timerState;
            clearInterval(interval);
        }
}