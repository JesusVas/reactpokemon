import './App.css';
import "./Cssapp.css";
import bulbasaur from "./001.png"
import charmander from "./004.png"
import squirtle from "./007.png"

function App() {
  let nombres=["Bulbasaur","Charmander","Squirtle"];
  return (
    <div className="Contenedor">
        <div className="Caja">
            <img src={bulbasaur} className="im"/>
            <div className='nombre'>{nombres[0]}</div>
        </div>
        <div className="Caja">
            <img src={charmander} className="ima"/>
            <div className='nombre'>{nombres[1]}</div>
        </div>
        <div className="Caja">
            <img src={squirtle} className="imag"/>
            <div className='nombre'>{nombres[2]}</div>
        </div>
       
    </div>
  );
}

export default App;
