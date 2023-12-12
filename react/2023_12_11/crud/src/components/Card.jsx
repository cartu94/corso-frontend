/* eslint-disable react/prop-types */
export default function Card({text, onClick}) {
  return (
    <div className="shadow-xl py-4 px-6 bg-slate-200 rounded-md flex gap-2 justify-end items-center relative">
      <h1>{text}</h1>
      <button
        className="font-bold hover:text-red-600 transition-all absolute right-1 top-0"
        onClick={onClick}
      >X</button>
    </div>
  );
}
