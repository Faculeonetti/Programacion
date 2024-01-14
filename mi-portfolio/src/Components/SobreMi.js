import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons'
import '../Stylesheets/SobreMi.css'
import Reference from '../Images/experiencia-programacion-persona-que-trabaja-codigos-computadora.jpg'

function SobreMi(){
  return(
    <div className='contenedor-sobre-mi'>
      <div className='contenedor-presentacion'>
        <div className='carta-presentacion'>
          <img className='imagen-de-referencia' alt='Este soy yo, Facundo Leonetti' src={Reference}></img>
            <div className='iconos-div'>
              <a href='https://www.instagram.com/facu_leonetti' target='_blank'  rel='noopener noreferrer'><FontAwesomeIcon color='white' size='2xl' icon={faInstagram} /></a>
              <a href='https://www.linkedin.com/in/facundo-leonetti-2936b6215' target='_blank'  rel='noopener noreferrer'><FontAwesomeIcon color='white' size='2xl' icon={faLinkedin} /></a>
              <a href='https://github.com/Faculeonetti' target='_blank'  rel='noopener noreferrer'><FontAwesomeIcon color='white' size='2xl' icon={faGithub} /></a>
            </div>
          </div>
      </div>
      <div className='carta-texto'>
        <p className='texto-descripcion'>
          "¡Hola! Soy <strong>Facundo Leonetti</strong>, un principiante en el desarrollo web. Me apasiona la informática, especialmente la programación."
        </p>
      </div>
    </div>
  );
}

export default SobreMi