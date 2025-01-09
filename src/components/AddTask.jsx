import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-rose-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o titulo da tarefa"
        className="border border-rose-200 outline-rose-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição da tarefa da tarefa"
        className="border border-rose-200 outline-rose-400 px-4 py-2 rounded-md"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-rose-400 hover:bg-rose-500  font-semibold text-white p-2 rounded-md transition duration-300 ease-in-out"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;
