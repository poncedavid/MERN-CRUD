import Layout from "../../Layout";

import TaskCard from "../../Components/TaskCard";

import { useEffect } from "react";
import { useTasks } from "../../Context/TasksContext";

function TaskPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <Layout>
      <h1>Tareas</h1>
      <div className="grid gap-3 grid-cols-3 w-full max-w-screen-lg">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
      <h1>TaskPage</h1>
    </Layout>
  );
}

export default TaskPage;
