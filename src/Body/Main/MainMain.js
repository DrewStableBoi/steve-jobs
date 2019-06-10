import React, { Component } from 'react';
import './App.css';
import StartButton from './startbutton';
import Timer from './timer';
import Counter from './counter';

class MainMain extends Component {

  constructor () {
    super();

    this.state = {

      buttonText: 'Start Timer',
      buttonColor: 'green',
      timerOn: false,
      time: 600,
      counter: 0,
      timeInterval: null
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

  }

  startTimer = () => {
    
    this.setState ({
      timerOn: true
    },() => {
      if(this.state.timerOn === true) {
        this.setState({
          buttonText: 'Stop Timer',
          buttonColor: 'red'
        })
      };
    })

    let timer; 
    let remaining = this.state.time;

      timer = setInterval(() => {
        remaining -= 1
        this.setState({
          time: remaining,
          timeInterval: timer
         })

         if(this.state.time === 0) {
          clearInterval(this.state.timeInterval);
          alert("End of timer!");
          this.setState({
            counter: this.state.counter + 1,
            time: 600,
            buttonText: 'Start Timer',
            buttonColor: 'green',
            timerOn: false
          })
        };

      }, 1000)
  };

  stopTimer = () => {
      clearInterval(this.state.timeInterval);
      if(this.state.time < 600) {
      this.setState({
        timerOn: false,
        time: 600,
        buttonText: 'Start Timer',
        buttonColor: 'green'
      })
    }
      else alert("No need to stop the counter when you haven't started it yet");
  };

  render() {
    return (
      <div className="MainApp">
        <StartButton 

              startTimer = {this.startTimer}
              stopTimer = {this.stopTimer}

              buttonText = {this.state.buttonText}
              buttonColor = {this.state.buttonColor}

              timerOn = {this.state.timerOn}
              timerStopped = {this.state.timerStopped}

              time = {this.state.time}
               />
        <Timer time = {this.state.time}/>
        <Counter counter = {this.state.counter}/>
      </div>
    );
  }

}

export default MainMain;
