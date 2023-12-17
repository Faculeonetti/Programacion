import React from 'react';
import '../Stylesheets/Mishabilidades.css';
import CSS from '../Images/CSS.png';
import Cplusplus from '../Images/C++.png';
import HARDWARE from '../Images/HARDWARE.png';
import HTML from '../Images/HTML.png';
import JAVASCRIPT from '../Images/JAVASCRIPT.png';
import NETWORKING from '../Images/NETWORKING.png';
import PHP from '../Images/PROGRAMACION.png';
import REACT from '../Images/REACT.png';


function Mishabilidades (){
  return (
    <div className="contenedor-habilidades">
      <div>
        <h3>PROGRAMACION</h3>
        <div className="programacion-topic">
          <article>
            <h3>HTML</h3>
            <img alt="imagen de HTML" src={HTML} />
          </article>
          <article>
            <h3>CSS</h3>
            <img alt="imagen de CSS" src={CSS} />
          </article>
          <article>
            <h3>C++</h3>
            <img alt="imagen de C++" src={Cplusplus} />
          </article>
          <article>
            <h3>PHP</h3>
            <img alt="imagen de PHP" src={PHP} />
          </article>
          <article>
            <h3>JAVASCRIPT</h3>
            <img alt="imagen de JAVASCRIPT" src={JAVASCRIPT} />
          </article>
          <article>
            <h3>REACT</h3>
            <img alt="imagen de REACT" src={REACT} />
          </article>
        </div>
      </div>

      <div>
        <div className="otros-topic">
          <article>
            <h3>HARDWARE</h3>
            <img alt="imagen de HARDWARE" src={HARDWARE} />
          </article>
          <article>
            <h3>NETWORKING</h3>
            <img alt="imagen de NETWORKING" src={NETWORKING} />
          </article>
        </div>
      </div>
    </div>
  );
    
}

export default Mishabilidades;