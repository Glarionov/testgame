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
            }
        ];
        this.state = {date: new Date(), questions, currentQuestion: questions[0]};
    }


    render() {
        return  (<div className="questions">
            <SingleQuestion questionData={this.state.currentQuestion} />

        </div>)
    }
}

export default Questions;