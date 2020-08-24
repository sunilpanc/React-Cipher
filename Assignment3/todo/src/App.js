import React, { Component } from 'react';
import './App.css';
import Add from './add';
import Display from './Display'
import 'materialize-css';

class App extends Component {
    state={
      task:[ {id:1,work:"Some Work"}],
      currentChange:''
    }
    handleChange=(event)=>{
      this.setState({...this.state,currentChange:event.target.value});
    }
    handleUpdate =()=>{
      let currentUpdate ={};
      currentUpdate.id = this.state.task.length+1;
      currentUpdate.work = this.state.currentChange;
      let task = [...this.state.task,currentUpdate];
      this.setState({currentChange:'',task});
    }
 
  render(){
    return (
      <div className="App">
         <Add currentChange = {this.handleChange} currentUpdate ={this.handleUpdate} inputValue = {this.state.currentChange}/>
         <Display allValues={this.state.task}/>
      </div>
    );
  }
}

export default App;