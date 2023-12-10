import "./App.css";
import Card from "./Card.jsx";

const obj = [
  {
    name: "tony",
    stipendio: 25000,
    ruolo: "Front-End Developer",
    azienda: "Sviluppo del Sud",
  },
  {
    name: "gianni",
    stipendio: 20000,
    ruolo: "Storyteller",
    azienda: "Il magico mondo di Gianni",
  },
  {
    name: "bepi",
    stipendio: 30000,
    ruolo: "Head Brewer",
    azienda: "Birrificio di qualcosa",
  },
];

function App() {
  return (
    <div className="container">
      {obj.map((item, index) => (
        <Card key={index} obj={item} />
      ))}
    </div>
  );
}

export default App;
