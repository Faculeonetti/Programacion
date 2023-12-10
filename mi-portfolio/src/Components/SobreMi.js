import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDiscord , faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons'
import '../Stylesheets/SobreMi.css'
import Reference from '../Images/experiencia-programacion-persona-que-trabaja-codigos-computadora.jpg'

function SobreMi(){
  return(
    <div className='contenedor-sobre-mi'>
      <div className='contenedor-presentacion'>
        <div className='carta-presentacion'>
          <img className='imagen-de-referencia' alt='Este soy yo, Facundo Leonetti' src={Reference}></img>
            <div className='iconos-div'>
              <a href='a'><FontAwesomeIcon color='white' size='2xl' icon={faInstagram} /></a>
              <a href='a'><FontAwesomeIcon color='white' size='2xl' icon={faDiscord} /></a>
              <a href='a'><FontAwesomeIcon color='white' size='2xl' icon={faLinkedin} /></a>
              <a href='a'><FontAwesomeIcon color='white' size='2xl' icon={faGithub} /></a>
            </div>
          </div>
      </div>
      <div className='carta-texto'>

      </div>
    </div>
  );
}

export default SobreMi