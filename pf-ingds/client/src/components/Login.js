import React from "react";
import {useState} from "react";
import Axios from "axios";
import "../styles/login.css";


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login",{
      username: formData.username,
      password: formData.password
    }).then((response)=>{
      if(response.data.success){
        alert("Inicio de sesión existoso");
        window.location.href = '/Dashboard'; 
      }else{
        alert("Datos erroneos");
      }
    }).catch((error)=>{
      console.log("Error en inicio de sesion",error);
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
      <h2 className="login-form">Login</h2>
      <form onSubmit={handleSubmit}>
        <h1>Usuario</h1>
        <input
          type="text"
          name="username"
          placeholder="Ingrese su usuario"
          value={formData.username}
          onChange={handleChange}
          required="required"
        />
        <br />
        <h1>Contraseña</h1>
        <input
          type="password"
          name="password"
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
