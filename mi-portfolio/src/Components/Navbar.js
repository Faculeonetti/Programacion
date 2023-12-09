import React, { useState } from 'react';
import '../Stylesheets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const closeMenu = () => {
    setMenuVisibility(false);
  };
  
  return (
    <div className='contenedor-nav'>
      <a className='link-nav-logo' href='#'>
        <FontAwesomeIcon size='2xl' color="white" icon={faCube} className='icono-font-facube' />
      </a>
      <nav className={`responsive-menu ${isMenuVisible ? 'visible' : 'hidden'}`}>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Sobre mi
        </a>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Mis habilidades
        </a>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Proyectos personales
        </a>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Mi experiencia laboral
        </a>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Educacion
        </a>
        <a className='link-nav' href='#' onClick={closeMenu}>
          Contacto
        </a>
      </nav>
      <button className='button-nav-responsive' onClick={toggleMenu}>
        <FontAwesomeIcon color="white" size='2xl' icon={faBars} />
      </button>
    </div>
  );
}

export default Navbar;