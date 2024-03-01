import Layout from "../../Layout";
import { useForm } from "react-hook-form";
import { useTasks } from "../../Context/TaskContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks } = useTasks();
  console.log(tasks);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Layout>
      <div className=" bg-zinc-300  max-w-md w-full p-10 rounded-md text-center">
        <h1 className="m-5">Crear tarea</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            autoFocus
            className="w-full px-4 py-2 rounded-md mb-4"
          />
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full  px-4 py-2 rounded-md mb-4"
          ></textarea>

          <button type="submit">Save</button>
        </form>
      </div>
    </Layout>
  );
}

export default TaskFormPage;
