import React from 'react';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from './context/appContext';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskForm from './components/TaskForm';

function App() {
  const {
    showTaskModal,
  } = useGlobalContext();
  // console.log(showTaskModal);
  return (
    <div className="tasks">
      <Header />
      <Tasks />
      {showTaskModal && <TaskForm />}
    </div>
  )
}

export default App;
