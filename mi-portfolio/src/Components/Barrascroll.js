import React from 'react'
import '../Stylesheets/Barra-hacia-abajo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


function Barrascroll (){
  return (
    <div className='barra-hacia-abajo'>
        <button className='down-open-section'><FontAwesomeIcon icon={faArrowDown} style={{color: "#ffffff",}} /></button>
    </div>
  );
}

export default Barrascroll;