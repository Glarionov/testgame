import React, { Component } from 'react';
import QuestionOption from './QuestionOption'

class SingleQuestion extends React.Component {
    clickOnOption(e, id) {
        if (id == 0) {
            console.log('good')
        } else {
            console.log('bad')
        }

        console.log(typeof id
        )

        console.log(typeof  this.props.questionData.answers[0]
        )
        if (this.props.questionData.answers.includes(parseInt(id))) {
            this.props.questionData.options[parseInt(id)].extraClass = "good";
        } else {
            this.props.questionData.options[parseInt(id)].extraClass = "bad";
        }

        console.log(this.props.questionData.options[parseInt(id)].extraClass);
    }

    t2() {

    }

    constructor(props) {
        super(props);
    }


    render() {
        return  (<div className="single-question">
            <div className="question-name">
                {this.props.questionData.name}
            </div>
                {/*{this.props.questionData.options.map((question, index) =>*/}
            {  Object.entries(this.props.questionData.options).map(([index, optionData]) => (
                <div>
                    <QuestionOption optionData = {optionData} index={index} parentClickEvent={this.clickOnOption.bind(this)}/>
                    {/*<div key={optionData.index}*/}
                    {/*     id={optionData.id}*/}
                    {/*     onClick={this.clickOnOption}*/}
                    {/*>*/}
                    {/*    index={index}*/}
                    {/*    {optionData.text} </div>*/}
                </div>

                // )}
                ))}



        </div>)
    }
}

export default SingleQuestion;