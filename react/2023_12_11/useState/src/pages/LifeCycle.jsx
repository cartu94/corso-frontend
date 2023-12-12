import Testo from '../components/Testo';
import { useState } from 'react';

const LifeCycle = () => {
  const [mostraTesto, setMostraTesto] = useState(false);
  return (
  <div className="flex items-start justify-center h-screen gap-4">
    <button onClick={() => setMostraTesto(!mostraTesto)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mostra il testo!</button>
    {mostraTesto && <Testo />}
  </div>
  );
}

export default LifeCycle;