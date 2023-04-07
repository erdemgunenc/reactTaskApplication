import { useState, useContext } from "react";
import TasksContext from "../context/task.jsx";
function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { editTaskById, createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {" "}
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Edit the Task</h3>
          <form className="task-form">
            <label className="task-label">Edit Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Edit The Description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Add a Task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Enter the description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
