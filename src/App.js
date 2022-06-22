import React from 'react';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from './context/appContext';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { useEffect } from 'react';

function App() {
  const {
    showTaskModal,
    login,
    isLoading,
  } = useGlobalContext();
  
  // login once the app loads
  useEffect(() => {
    login();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);
  if (isLoading) {
    return <div>Loading...</div>;
  };
  return (
    <div className="tasks">
      <Header />
      <Tasks />
      {showTaskModal && <TaskForm />}
    </div>
  )
}

export default App;
