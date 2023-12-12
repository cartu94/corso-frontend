import { useState } from "react";

export default function Testo() {
  const [testo, setTesto] = useState("");

  return (
    <div>
      <input
        className="border-2 rounded-sm p-2 w-[200px]"
        onChange={(e) => {
          setTesto(e.target.value);
        }}
      />

      <h1 className="font-semibold p-2 text-blue-400">{testo}</h1>
    </div>
  );
}
