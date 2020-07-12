import React, { Component } from 'react';
import QuestionOption from './QuestionOption'

class SingleQuestion extends React.Component {
    clickOnOption(e, id) {
        id = parseInt(id);

        console.log(this.state.clickedOptions
        )
        if (this.state.clickedOptions.includes(id)) {
            return true;
        }

        let qd = this.state.questionData;




        if (this.props.questionData.answers.includes(id)) {
            qd.options[id].extraClass = "good";
            this.props.changeScore(true);
        } else {
            qd.options[id].extraClass = "bad";
            this.props.changeScore();
        }


        // let qd = this.state.questionData;
        // qd.options[parseInt(id)].extraClass;


        this.setState(prevState => ({
            questionData: qd,
            clickedOptions:  [...prevState.clickedOptions, id]
        }));



        console.log(this.props.questionData.options[parseInt(id)].extraClass);
    }

    t2() {

    }

    constructor(props) {
        super(props);
        this.state = {
            questionData: this.props.questionData,
            clickedOptions: []
        }
    }

    componentDidMount() {

    }


    render() {
        return  (<div className="single-question">
            <div className="question-name">
                {this.state.questionData.name}
            </div>
                {/*{this.props.questionData.options.map((question, index) =>*/}
            {  Object.entries(this.state.questionData.options).map(([index, optionData]) => (
                <div key={index}>
                    <QuestionOption optionData = {optionData} index={index}  parentClickEvent={this.clickOnOption.bind(this)}/>
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