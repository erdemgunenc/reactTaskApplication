import { useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx";
import TasksContext from "./context/task.jsx";
function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>My Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
