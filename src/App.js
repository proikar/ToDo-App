import React, { useEffect, useState } from "react";
import Menu from "./components/Head_bar/menu";
import Registration from "./components/Registration/Registration";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#191919");

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasksAndSave(newTasks);
  }

  function handleAuthentication() {
    setIsAuthenticated(true);
  }

  return (
    <>
      {!isAuthenticated ? (
        <Registration onAuthentication={handleAuthentication} />
      ) : (
        <>
          <Menu />
        </>
      )}
    </>
  );
}

export default App;
