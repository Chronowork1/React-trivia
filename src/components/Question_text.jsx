import React, { Component } from 'react';
import '../css/Question_text.css';
// import components


export class Question extends React.Component {
  
  render() {
    return (
      <div>
        <h1>{this.props.questionText}</h1>
        <p> {this.props.correct}</p>
        <p> {this.props.incorrect}</p>
      </div>
    );
  }
}
export default Question;