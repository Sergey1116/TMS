import React, { Component }  from 'react'

import './style.scss';

export default class StopWatch extends Component {
    constructor(props){
      super(props);
      this.state = {date: new Date(), clockRun: false, firstStart: true, dateStart:  new Date()};
    }

    tick() {
      this.setState({date: new Date()});
    }
    
    start(){
      if (this.firstStart){
        this.setState({ date: new Date(), clockRun:true, firstStart: false, dateStart:  new Date() });
      } else{
        this.setState({ date: new Date() , clockRun:true, dateStart:  new Date() - (this.state.date - this.state.dateStart)});
      }
      this.timerID = setInterval(
        () => this.tick(),
        1
      );
    }

    stop(){
      clearInterval(this.timerID);
      this.setState({clockRun:false});
    }

    restart(){
      clearInterval(this.timerID);

      this.setState({ date: this.state.dateStart, clockRun:false, firstStart: true });
    }

    buttonsStartStop(){
      if (this.state.clockRun) {
        return (<i className='material-icons stop' onClick={this.stop.bind(this)}>pause_circle_outline</i>);
      } else {
        return (<i className='material-icons start' onClick={this.start.bind(this)}>play_circle_outline</i>);
      }
    }
    
    render(){
      const time = new Date(this.state.date-this.state.dateStart);
      return(
          <h2 className='stopwatch'>
            {this.buttonsStartStop()}
            <span>
              {time.getMinutes().toLocaleString( undefined, {minimumIntegerDigits: 2})}:
              {time.getSeconds().toLocaleString( undefined, {minimumIntegerDigits: 2})}:
              {time.getMilliseconds().toLocaleString(undefined, {minimumIntegerDigits: 3})}
            </span>
            <i className='material-icons reset'  onClick={this.restart.bind(this)}>replay</i>
        </h2>
        );
    }
}