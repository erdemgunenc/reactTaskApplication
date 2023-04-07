import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

const Provider = ({ children }) => {
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

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
};
export { Provider };
export default TasksContext;
