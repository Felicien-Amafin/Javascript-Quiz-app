import { App } from "./app.js";

class QuestionHandler {
    static fetchQuestionsFromApi() {
        const topic = App.topicPage.topic;
        const level = App.levelPage.level;
        let url = `https://the-trivia-api.com/v2/questions?limit=20&types=text_choice&categories=${topic}&difficulties=${level}`;
        const request = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send();
            if(xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        })
        return request;
    }
}