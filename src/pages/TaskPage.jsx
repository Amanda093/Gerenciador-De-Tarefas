import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-rose-20 flex justify-center p-6 flex flex-auto">
      <div className="w-[500px] space-y-5">
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
