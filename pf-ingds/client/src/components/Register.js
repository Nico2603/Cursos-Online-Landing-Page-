import React from "react";
import {useState} from "react";
import Axios from "axios";
import "../styles/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    user_type: "",
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/create",{
      username: formData.username,
      password: formData.password,
      user_type: formData.user_type
    }).then(()=>{
      alert("Usuario registrado");
      window.location.href="/";
    });
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
      <h2 className="register-form">Register</h2>
      <form onSubmit={handleSubmit}>
        <h1>Usuario</h1>
        <input
          type="text"
          name="username"
          placeholder="Cree su usuario"
          value={formData.username}
          onChange={handleChange}
          required="required"
        />
        <br />
        <h1>Contraseña</h1>
        <input
          type="password"
          name="password"
          placeholder="Cree su Contraseña"
          value={formData.password}
          onChange={handleChange}
          required="required"
        />
        <h1>tipo de usuario</h1>
        <select
          name="user_type"
          value={formData.user_type}
          onChange={handleChange}
          required
        >
          <option value="">Elija una opción</option>
          <option value="instructor">Instructor</option>
          <option value="estudiante">Estudiante</option>
        </select>
        <br />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
