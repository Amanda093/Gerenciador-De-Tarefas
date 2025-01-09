import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen p-6  bg-rose-50">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0  text-rose-600"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-rose-200 p-4 rounded-md">
          <h2 className="text-xl font-bold  text-rose-700 ">{title}</h2>
          <p className="text-rose-600 text-lg break-words">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
