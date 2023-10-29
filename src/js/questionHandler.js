import { App } from "./app.js";
import { Question } from "./questionObject.js";

export class QuestionHandler {
    constructor() {
        this.questionsArray;
        this.currentQuestion;
         /* currentQuestion = {
            question,
            correctAnswer,
            answers,
            currentQindex,
        } */
    }

    static createCurrentQuestionObj() {
        this.currentQuestion = new Question();
    }

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

    static storeQuestionsInArray(data) {
        this.questionsArray = data;
        console.log(data)
    }

    static fetchSingleQuestionFromArray() {
        //Storing newly fetched question in current question object
        if(!this.currentQuestion.currentQindex) {
            this.currentQuestion.currentQindex = 0;
        }
        let index = this.currentQuestion.currentQindex;
        this.currentQuestion.question = this.questionsArray[index].question.text;
        this.currentQuestion.correctAnswer = this.questionsArray[index].correctAnswer;
        this.currentQuestion.answers = this.questionsArray[index].incorrectAnswers;
        this.setAtRandomIndex(this.currentQuestion.correctAnswer);
        this.currentQuestion.currentQindex ++;
    }

    static setAtRandomIndex(correctAnswer) {
        //Set correct answer at random index in currentQuestion.answers
        const randomIndex = Math.floor(Math.random() * 5);
        this.currentQuestion.answers.splice(randomIndex, 0, correctAnswer );
    }

    static questionDisplayHandler() {
        this.displayQuestion();
    }

    static displayQuestion() {
        document.getElementById('question').textContent = this.currentQuestion.question;
        const responseBubbles = document.querySelectorAll('li');

        for(let index = 0; index < responseBubbles.length ; index ++) {
            responseBubbles[index].textContent = this.currentQuestion.answers[index];
        }
    }
}