import React from "react";
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página Principal</h1>
      <p>Por favor, elige una opción:</p>
      <ul>
        <p>¿Ya tienes una cuenta?</p>
        <li>
          <a href="/login" className="link">
            Inicia Sesión
          </a>
        </li>
        <p>¿No tienes una cuenta?</p>
        <li>
          <a href="/register" className="link">
            Regístrate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
