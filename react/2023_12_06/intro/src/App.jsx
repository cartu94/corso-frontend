import "./App.css";
import Card from "./Card.jsx"

const obj = {
  nino: {
    name: "tony",
    stipendio: 25000,
    ruolo: "Front-End Developer",
    azienda: "Sviluppo del Sud"
  },
  vitto: {
    name: "gianni",
    stipendio: 20000,
    ruolo: "Storyteller",
    azienda: "Il magico mondo di Gianni"
  },
  luca: {
    name: "bepi",
    stipendio: 30000,
    ruolo: "Head Brewer",
    azienda: "Birrificio di qualcosa"
  },
}

function App() {
  return (
    <div className="container">
      <Card obj={obj.nino}/>
      <Card obj={obj.vitto}/>
      <Card obj={obj.luca}/>
    </div>
  );
}

export default App;
