import React from "react";
import {useState} from "react";
import "../styles/login.css";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log("Datos del formulario:", formData);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="cont">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <h1>Usuario</h1>
        <input
          type="text"
          name="user"
          placeholder="Ingrese su usuario"
          value={formData.username}
          onChange={handleChange}
          required="required"
        />
        <br />
        <h1>Contraseña</h1>
        <input
          type="password"
          name="pass"
          placeholder="Ingrese su Contraseña"
          value={formData.password}
          onChange={handleChange}
          required="required"
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
