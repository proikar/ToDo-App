import React, { useState, useEffect } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error storing tasks in localStorage:', error);
    }
  }, [tasks]);

  function handleAddTask() {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: inputValue,
        isCompleted: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue('');
    }
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className={`task-manager-container fade-in`}>
      <header className="header">
        <div>
          <p>Created tasks</p>
          <span>{tasks.length}</span>
        </div>

        <div>
          <p className="textPurple">Completed tasks</p>
          <span>
            {tasks.filter((task) => task.isCompleted).length} of {tasks.length}
          </span>
        </div>
      </header>

      <section className="tasks">
        <form onSubmit={(e) => e.preventDefault()} className="newTaskForm">
          <input
            placeholder="Add a new task"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <button onClick={handleAddTask}>Create</button>
        </form>

        <div className="list">
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <button className="checkContainer" onClick={() => handleCompleteTask(task.id)}>
                {task.isCompleted ? <div /> : <div />}
              </button>

              <p className={task.isCompleted ? 'textCompleted' : ''}>{task.title}</p>

              <button className="deleteButton" onClick={() => handleDeleteTask(task.id)}>
                <p>Delete</p>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskManager;
