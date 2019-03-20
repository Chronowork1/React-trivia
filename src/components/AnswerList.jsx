import React, { Component } from 'react';
import {Answer} from './Answer.jsx';

export class AnswerList extends React.Component {
  render() {
      var answers = [];
      for (let i =0; i < this.props.FlowChart.questions[0].answers.length; i++){
        answers.push(<Answer choice={i} handleClick={this.props.handleClick} answer={this.props.FlowChart.answers[i]} />)
      }
      console.log(answers)
    return(
      <div>
        {answers}
      </div>
    )  
  }
}