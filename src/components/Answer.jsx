import React, { Component } from 'react';
import '../css/Answer.css'
//import {FlowChart}from './FlowChart.jsx';
// import components


export class Answer extends React.Component {
  
  render() {
    console.log("FlowChart", this.props.FlowChart)
    
 return this.props.FlowChart.map((Flow) => {
   
    return (
      <div>
        <ul>
          <button onClick = {() => this.props.onClick(this.props.choice)}>{Flow.place}</button>
        </ul>
      </div>
    );
    });
  }
}
//onClick = {() => this.props.onClick()}
export default Answer;