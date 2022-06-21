/* eslint-disable no-useless-constructor */
/* eslint-disable no-eval */
/* eslint-disable no-lone-blocks */

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      stages:[{stage:'Idea',tasks:[]},{stage:'Development',tasks:[]},{stage:'Testing',tasks:[]},{stage:'Deployment',tasks:[]}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleaddTask = this.handleaddTask.bind(this);
    this.handleremoveTask = this.handleremoveTask.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleEnter);
    document.addEventListener('contextmenu', this.handleTask);
    document.addEventListener('click', this.handleTask);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnter);
    document.removeEventListener('contextmenu', this.handleTask);
    document.removeEventListener('click', this.handleTask);
  }

  handleaddTask (e,stage,task) {
    const { stages } = this.state;
    e.preventDefault();
    const newStages = [...stages];
    const currStage = newStages.find(sta => sta.stage === stage);
    const currI = newStages.indexOf(currStage);
    if(currI < newStages.length -1) {
      newStages[currI + 1].tasks.unshift(task);
      console.log(newStages)
      newStages[currI].tasks = currStage.tasks.filter((el,i)=> el!==task);
      console.log(newStages)
    } else {
     newStages[currI].tasks = currStage.tasks.filter((el,i)=> el!==task);
    }
    this.setState({
        input:'',
        stages:[...newStages]
      }) 
  }

  handleremoveTask (e,stage,task) {
    const { stages } = this.state;
    const newStages = [...stages];
    const currStage = newStages.find(sta => sta.stage === stage);
    const currI = newStages.indexOf(currStage);
    if(currI > 0) {
      newStages[currI - 1].tasks.push(task);
      console.log(newStages)
      newStages[currI].tasks = currStage.tasks.filter((el,i)=> el!==task);
      console.log(newStages)
    } else {
     newStages[currI].tasks = currStage.tasks.filter((el,i)=> el!==task);
    }
    this.setState({
        input:'',
        stages:[...newStages]
      })
  }

  handleChange (e) {
    const { value } = e.target;
    this.setState({
      input:value
    })
  }

  handleEnter (e) {
    const { keyCode } = e;
    const { input,stages } = this.state;
    const newStages = [...stages]
    if (keyCode === 13 && !newStages[0].tasks.includes(input)) {
     newStages[0].tasks.unshift(input)
      this.setState({
        input:'',
        stages:[...newStages]
      }) 
    document.getElementById('additem').value = '';
    }
  }
  render () {
    const { stages } = this.state;
    return (
      <div className='all'>
        <div className='additem'>
          <label for='additem'>Add Item here:</label>
          <input id='additem' onChange={this.handleChange} type='text' name='additem'></input>
        </div>
        <div className='assembly'>
          {stages.map((stage,i) => <Assembly 
            stage={stage.stage}
            tasks={stage.tasks}
            addTask={this.handleaddTask}
            removeTask={this.handleremoveTask}
            key={stage.stage+i}
          />)} 
        </div>
      </div>
    )
  }
}


class Assembly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    const { stage,tasks,addTask,removeTask } = this.props
    return (
      <div>
        <h6>
          {stage}
        </h6>
        <div className='task'> 
              {tasks.map((task,i) => 
              <button 
                onContextMenu={(e)=>addTask(e,stage,task)} 
                onClick={(e)=>removeTask(e,stage,task)}
                key={task+i} 
              >{task}
              </button>
              )}
        </div>
      </div>
    )
  }
}


export default App;