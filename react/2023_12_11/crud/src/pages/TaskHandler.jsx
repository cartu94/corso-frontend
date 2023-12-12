import { useState } from "react";
import Card from "../components/Card";

export default function TaskHandler() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (inputValue === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  }

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-blue-500 w-full h-[50%] flex justify-center">
        <div className="flex justify-center items-center flex-col gap-4 w-fit">
          <input
            className="border-2 shadow-xl rounded p-2 w-full"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="text-white font-semibold bg-blue-900 border-2 border-transparent p-2 text-center rounded shadow-xl w-full hover:bg-blue-700 hover:border-blue-900 transition-all"
            onClick={addTask}
          >
            Aggiungi una task
          </button>
        </div>
      </div>
      <div className="bg-slate-400 w-full h-[50%] flex justify-center items-center flex-wrap gap-2 py-4">
        {tasks.map((task, index) => (
          <div key={index}>
            <Card text={task} onClick={() => removeTask(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
