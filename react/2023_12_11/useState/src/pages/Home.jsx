import { useState } from "react";


export default function Home() {
  const [numero, setNumero] = useState(0);
  const [input, setInput] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [show, setShow] = useState(true)

  return <div className="flex flex-col items-center justify-start h-screen gap-4">
    <button onClick={() => setNumero(numero + 1)} className="border-2 hover:bg-green-300 active:bg-green-500 border-black p-2">Aumenta Numero: {numero}</button>

    <input type="text" className="border-2 border-black p-2" onChange={(e) => setInput(e.target.value)}/>
    {input}

    <button onClick={() => setIsSubscribed(true)} className={`border-2 hover:bg-green-300 active:bg-green-500 border-black p-2 uppercase ${isSubscribed ? "disabled:bg-gray-500" : ""}`} disabled={isSubscribed}>{isSubscribed ? "Iscritto" : "Iscriviti"}</button>
    {isSubscribed && <h1 className={`text-2xl uppercase`}>Grazie per l&apos;iscrizione</h1>}
    
    <button onClick={() => setShow(!show)} className={`border-2 hover:bg-green-300 active:bg-green-500 border-black p-2 uppercase`}>{show ? "Mostra" : "Nascondi"}</button>
    {show && <h1 className={`text-2xl uppercase`}>Sono visibile</h1>}
  </div>;
}
