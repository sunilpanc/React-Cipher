import React, { Component } from 'react';
import './App.css';
import Add from './add';
import Display from './Display'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
class App extends Component {
    state={
      task:[ {id:0,work:"Some Work"}],
      currentChange:'',
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
 
    deleteHandler=(todoIndex)=>{
      const currentState = [...this.state.task];
      currentState.splice(todoIndex,1);
      console.log(currentState);
      this.setState({task:currentState});
    }
    editHandler=(editIndex)=>{
      const currentState = [...this.state.task];
      let currentUpdate ={};
      currentUpdate.id = this.state.task.length+1;
      currentUpdate.work = this.state.currentChange;

      let task = [...this.state.task,currentUpdate];
      currentState.splice(editIndex,1);
      this.setState({task});
    }
  render(){
    return (
      <div className="container app">
         <Add currentChange = {this.handleChange} 
              currentUpdate ={this.handleUpdate} 
              inputValue = {this.state.currentChange} 
              editValue={this.state.editIndex}/>
         <Display allValues={this.state.task} deleteHandler={this.deleteHandler} editHandler={this.editHandler}/>
      </div>
    );
  }
}

export default App;