import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-rose-100  rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 group ">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-rose-300 group-hover:bg-rose-400 text-left w-full font-semibold text-rose-700 p-2 rounded-md transition duration-200 ease-in-out ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <button className="bg-rose-300 group-hover:bg-rose-400 text-rose-700 p-2 rounded-md transition duration-300 ease-in-out">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-rose-300 group-hover:bg-rose-400 text-rose-700 p-2 rounded-md transition duration-300 ease-in-out"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
