import { GamePage } from './gamePage.js'
import { HomePage } from './homePage.js'
import { ScorePage } from './scorePage.js'
import { SettingPage } from './settingPage.js'


export class App {
    constructor() {
        this.homePage;
        this.topicPage;
        this.levelPage;
        this.gamePage
        this.scorePage;
    }

    static createPagesObj() {
        this.homePage = new HomePage('page');
        this.topicPage = 
            new SettingPage(
                'page',
                'Topics', 
                ['Film and Tv', 'Science', 'General Klg', 'History', 'Music'], 
                'Next'
            );
        this.levelPage = 
            new SettingPage(
                'page',
                'Levels', 
                ['Easy', 'Medium', 'Hard'], 
                'Next'
            );
        this.gamePage = 
            new GamePage(
                'page',
                '', 
                ['p1', 'p2', 'p3', 'p4']
            );   
        this.scorePage = new ScorePage('page');  
    }

    static init() {
        this.createPagesObj();
        this.homePage.renderHomePage();
    }
}
App.init();