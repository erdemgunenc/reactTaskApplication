import TaskShow from "./TaskShow.jsx";
import { useContext } from "react";
import TasksContext from "../context/task.jsx";
const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  console.log("taskList: ", tasks);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
};
export default TaskList;
