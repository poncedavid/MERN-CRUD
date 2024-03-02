import { createContext, useContext, useState } from "react";

import {
  createTaskRequest,
  getTasksRequest,
  deleteTasksRequest,
} from "../Api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 200) setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
