import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1 className="name">{props.obj.name}</h1>
      <div className="dataContainer">
        <p className="card">Stipendio:</p>
        <p>{props.obj.stipendio}</p>
        <p className="card">Ruolo:</p>
        <p>{props.obj.ruolo}</p>
        <p className="card">Azienda:</p>
        <p>{props.obj.azienda}</p>
      </div>
    </div>
  );
}