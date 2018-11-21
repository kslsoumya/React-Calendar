import React from "react";

import Calendar from "./components/Calendar";
import Card from './components/card';

import "./App.css";

class App extends React.Component {
  state ={
    isDayClicked :false,
    isEdited :false,
    dayClicked:''
  }
  onDayClick(day){
    this.setState({
      dayClicked :day,
      isDayClicked:true,
      isEdited:false
    })

  }
  onEditDay(isEdited) {
    this.setState({
      isEdited :true
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar  dayClick ={(day)=>this.onDayClick(day)}  isChanged ={this.state.isEdited}/>
          <Card  editData = {(isEdited)=>this.onEditDay(isEdited)} isDayClicked ={this.state.isDayClicked}
           dayClicked ={this.state.dayClicked}/>
        </main>
      </div>
    );
  }
}

export default App;
//
