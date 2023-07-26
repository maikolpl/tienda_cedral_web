import React from 'react';
import './Header.css'; // Importa los estilos CSS aquí si los tienes
import cedralLogo from "../../assets/CEDRAL 2 (1).png"

const Header = () => {
    return (
      <header className="header"> {/* Aquí puedes usar la clase de CSS si tienes estilos */}
        
        <img src= {cedralLogo} alt="imagen" />
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/Emergencias">Emergencia</a></li>
            {/* Agrega más elementos de menú según tus necesidades */}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;