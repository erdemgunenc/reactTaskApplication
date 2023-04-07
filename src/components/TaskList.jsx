import TaskShow from "./TaskShow.jsx";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  console.log("tasks:", tasks);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            task={task}
            key={index}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};
export default TaskList;
