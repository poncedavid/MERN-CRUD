import React from "react";
import { useTasks } from "../../Context/TasksContext";
import { NavLink } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  return (
    <div className=" bg-zinc-200 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className=" text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button onClick={() => deleteTask(task._id)}>delete</button>
          <NavLink>edit</NavLink>
        </div>
      </header>

      <p className=" text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
