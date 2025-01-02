import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import "./index.css"; // Ajuste o caminho se necessário

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar 8 horas por dia",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar matematica",
      description: "Estudar 8 horas por dia",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar ingles",
      description: "Estudar 8 horas por dia",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar a tarefa
      if (task.id === taskId) {
        return { task, isCompleted: !task.isCompleted };
      }

      // Não preciso atualizar a tarefa
      return newTasks;
    });
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
