import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TaskProvider");
  }

  return context;
};

export function TaskProvider({ children }) {
  
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    console.log("createTask");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
