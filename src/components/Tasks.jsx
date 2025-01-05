import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  // Vai para a página "TaskPage"
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-rose-100  rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 group ">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-rose-300 group-hover:bg-rose-400 group-hover:text-white text-left w-full font-semibold text-rose-700 p-2 rounded-md flex transition duration-200 ease-in-out ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-rose-300 group-hover:bg-rose-400 group-hover:text-white text-rose-700 p-2 rounded-md transition duration-300 ease-in-out"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-rose-300 group-hover:bg-rose-400 group-hover:text-white text-rose-700 p-2 rounded-md transition duration-300 ease-in-out"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
