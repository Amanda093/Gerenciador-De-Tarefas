import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { v4 } from "uuid";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Sempre que o valor da lista for alterado o valor da função será atualizado
  useEffect(() => {
    // convertendo a lista task para String
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar a tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Não preciso atualizar a tarefa
      return task;
    });
    setTasks(newTasks);
  }

  // Deleta uma tarefa
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // Adiciona uma nova tarefa
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-rose-50 flex flex-auto">
      <div className="w-[500px] space-y-5">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
