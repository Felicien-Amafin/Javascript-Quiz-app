
import { GamePage } from './gamePage.js'
import { HomePage } from './homePage.js'
import { ScorePage } from './scorePage.js'
import { SettingPage } from './settingPage.js'


class App {
    static init() {
        const scorePage = new ScorePage('page');
        const gamePage = new GamePage('page','', ['', '', '', ''], scorePage.renderScorePage.bind(scorePage));
        const levelPage = new SettingPage(
            'page',
            'Levels', 
            ['Easy', 'Medium', 'Hard'], 
            'Next', 
            gamePage.renderGamePage.bind(gamePage)
            );
        const topicPage = new SettingPage(
             'page',
             'Topics', 
             ['Film and Tv', 'Science', 'General Klg', 'History', 'Music'], 
             'Next', 
             levelPage.updateSettingPage.bind(levelPage)
             );
        const homePage = new HomePage('page', topicPage.renderSettingPage.bind(topicPage));

    }
}
App.init();