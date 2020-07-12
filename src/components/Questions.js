import React, { Component } from 'react';
import SingleQuestion from './SingleQuestion'

class Questions extends React.Component {

    constructor(props) {
        super(props);

        let questions = [
            {
                name: 'set color of text',
                answers: [0],
                options: {
     0 :       {
                id: 0,
                text: 'color'
            },
        1:    {
                id: 1,
                text: 'text-color'
            }
    }
            },
            {
                name: 'set color of background',
                answers: [0],
                options: {
                    0 :       {
                        id: 0,
                        text: 'background'
                    },
                    1:    {
                        id: 1,
                        text: 'text-color'
                    }
                }
            }
        ];
        this.state = {score: 0, currentQuestionIndex: 0, questions, currentQuestion: questions[0]};
    }

    changeScore(goodAnswer) {
        let changer = goodAnswer? 10: -5;
        this.setState({
            score: this.state.score + changer
        })
    }

    changeQuestion(indexChange) {
        console.log('===', indexChange)
        let currentIndex = this.state.currentQuestionIndex;
        currentIndex +=indexChange;
        this.setState({
            currentQuestionIndex: currentIndex,
            currentQuestion: this.state.questions[currentIndex]
        })
        console.log(this.state.currentQuestionIndex)
        console.log(this.state.currentQuestion)
    }

    render() {
        return  (<div className="questions">
            score = {this.state.score}
            <SingleQuestion questionData={this.state.currentQuestion}
                            changeScore={this.changeScore.bind(this)}
            />

            <div className="next-question"
            onClick={this.changeQuestion.bind(this, 1)}
            >
                next
            </div>

        </div>)
    }
}

export default Questions;