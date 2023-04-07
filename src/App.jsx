import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);
  const URL = "http://localhost:3004";
  const createTask = async (title, taskDesc) => {
    const response = await axios.post(`${URL}/tasks`, { title, taskDesc });
    const createdTasks = [...tasks, response.data];
    console.log("Created:", createdTasks);
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get(`${URL}/tasks`);
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  const deleteTaskById = async (id) => {
    console.log("id: ", id);
    await axios.delete(`${URL}/tasks/${id}`);
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletedTask);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`${URL}/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>My Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
