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
        this.data = {
            goodAnswerScoreChange: 10,
            badAnswerScoreChange: -5,
        }


        this.state = {score: 0, currentQuestionIndex: 0, questions, currentQuestion: questions[0],
            lastQuestion: false, showingResult: false, maxScore: questions.length * this.data.goodAnswerScoreChange};

        this.computed = {
            lastQuestion: () => {
                this.setState({
                    lastQuestion: this.state.currentQuestionIndex < this.state.questions.length - 1
                })
            }
        }

    }

    changeScore(goodAnswer) {
        let changer = goodAnswer? this.data.goodAnswerScoreChange: this.data.badAnswerScoreChange;
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
        this.computed.lastQuestion();
        console.log(this.state.currentQuestionIndex)
        console.log(this.state.currentQuestion)
    }

    openTestResult() {
        this.setState({
            showingResult: true
        });
    }

    startTestAgain() {
        this.setState({
            showingResult: false
        });
        this.changeQuestion(0);
    }

    render() {

        const nextButton = ()=>{
            if(this.state.lastQuestion){
                return <div onClick={this.openTestResult.bind(this, 1)}>See result</div>
            } else{
                return <div className="next-question" onClick={this.changeQuestion.bind(this, 1)}>Next</div>
            }
        }

        if (this.state.showingResult) {
            return (<div className="show-result">Your score is {this.state.score} out of {this.state.maxScore}
            <div className="start-again" onClick={this.startTestAgain.bind(this)}>Start test again</div>
            </div> );
        } else {
            return  (<div className="questions">
                score: {this.state.score}
                <SingleQuestion questionData={this.state.currentQuestion}
                                key={this.state.currentQuestionIndex}
                                changeScore={this.changeScore.bind(this)}
                />

                this.currentQuestionIndex={this.state.currentQuestionIndex}
                this.state.questions.length={this.state.questions.length}
                this.lastQuestion={this.state.lastQuestion}

                <div className="next-question"
                     onClick={this.changeQuestion.bind(this, -1)}
                >
                    prev
                </div>
                {nextButton()}
            </div>)
        }


    }
}

export default Questions;