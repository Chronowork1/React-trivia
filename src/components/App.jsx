import React, { Component } from 'react';
import '../css/App.css';
import {Question} from './Question_text.jsx';
import {Answer} from './Answer.jsx';
import {FlowChart} from './Flowchart.jsx';
import { AnswerList } from './AnswerList.jsx';
//import {buildFirebase} from '../clients/firebase.js'
import { getQuestions } from '../clients/firebase.js';
// import components

//var firebaseDatabase = buildFirebase();

//Array and object of questions and answer.

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentOption: FlowChart.questions[0],
      questionIndex: 0,
      flowchart: FlowChart,
      correct: 0,
      incorrect:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    //let clickAnswer = this.state.currentOption.answers[0].place;
    let newQuestionIndex = this.state.questionIndex;
    if(choice === this.state.flowchart.questions[this.state.questionIndex]) {
      this.setState({correct: this.state.correct + 1})
        //alert(this.state.currentOption.correctAnswerText)      
    } else {
      this.setState({incorrect: this.state.incorrect + 1})      
        //alert(this.state.currentOption.incorrectAnswerText)
    }
    this.setState({
      currentOption: FlowChart.questions[newQuestionIndex],
      questionIndex: newQuestionIndex
    })
    if (this.state.questionIndex >= 8) {
      this.setState({questionIndex: 0})//<Answer FlowChart = {this.state.currentOption.answers} handleClick={this.handleClick} onClick = {() => this.handleClick()}/>
      this.setState({correct: 0})
      this.setState({incorrect: 0})
    }else {
      this.setState({questionIndex: this.state.questionIndex + 1})
    }
  }

  render() {
    //const hello = {FlowChart}
    console.log(FlowChart.questions[0].answers[0].place)
    console.log(this.state.flowchart.questions[this.state.questionIndex].correctAnswer)
    return (
      <div>
        <Question questionText= {this.state.currentOption.question}/>
        <p>Correct:<Question correct = {this.state.correct}/></p>
        <p>Incorrect:<Question incorrect = {this.state.incorrect}/></p>
        <Answer FlowChart = {this.state.currentOption.answers} handleClick={this.handleClick} onClick = {() => this.handleClick()}/>
        
      </div>
    );
  }
}


/*export class App extends Component {
  constructor(props){
    super(props);
    //set the state to question and answer

    this.state = {
      //Question: "Which of the following is one of the 7 natural wonder of the world?",
      Answers: ["Komodo Island", "Great Barrier Reef", "Black Forest", "The Matterhorn"],
      correctAnswer: FlowChart[0],
      answerPicked: null,
      currentOption: FlowChart.questions[0]
    }
  
    getQuestions((questions) => {
      console.log(questions);
       this.setState({
         ...this.state,
         "questions": questions
       });
      });
 
    //console.log(FlowChart.Reef)
    /*this.state={
      currentQuestion: questionsAndAnswer[0],
      currentAnswer: questionsAndAnswer[0].answers[0],
    }*/
  //}

  //When clicked it alert hello world.
  /*handleClick() {
    let clickAnswer = "Hello World";
    this.setState({
      currentAnswer: alert(clickAnswer)
    });
  }*/
  //o = answer's array
  // next = */
  /*handleClick() {
    //console.log(this.state.Answers)
    const o = this.state.currentOption
    const next = this.nextOption(o.correctAnswerText)
    //console.log(next)
    this.setState({
      currentOption: next
    })
    //console.log(this.state.Answers[0])

  }

  nextOption(str) {
    //console.log(FlowChart[0])
    return FlowChart[str]    
  }

  flowChart() {
    //console.log(this.state)
    //const b = this.state.correctAnswer
    //console.log(b)
    /*return(
      <div>
        <Answer />
      </div>
    )*/
  

  /*render() {
    //Highlights answers from state and plans on when clicked sacramento it'll alert hello world.
    //const answers = this.state.currentQuestion.answers.map(a => <Answer answerText={a} onClick = {() => this.handleClick()}/>);
    //const answer changes this.state.answer to a function a 
    const answers = this.state.Answers.map(a => <Answer answerText= {a} onClick = {() => this.handleClick()}/>);
    const flowchart = this.state.currentOption.answers.map(b => <FlowChart flowchartText = {b} onClick = {() => this.handleClick()}/>)
    const hello = this.state.currentOption.answers
    console.log(hello)
    console.log(answers)
    //if(){

    //}
    return (
      <div className="app">
        <Question questionText={this.state.currentOption.question} />
        {/*flowchart*///}    
        
      //</div>
    //);
  //}
//}
//<FlowChart flowchart={FlowChart}/>
//Put correct or incorrect after clicked button.
//if someone click on answer set state 
export default App;