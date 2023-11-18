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
    
     <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input 
            type="text" 
            className="form-control" 
            name="username" 
            placeholder="Enter username" 
            value={formData.username}
            onChange={handleChange}
            required="required"
        	/>
        </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Enter password" 
              value={formData.password}
              onChange={handleChange}
              required="required"
          />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
      <div className="sign-up">
        <a href="/Register">Don't have an account? Sign up</a>
      </div>
    </div>
  );
};

export default Login;
