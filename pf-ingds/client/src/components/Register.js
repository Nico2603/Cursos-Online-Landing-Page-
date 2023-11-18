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
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
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
        <div className="form-group">
          <label htmlFor="user_type">User type</label>
          <select className="form-control" name="user_type">
            <option value="">Select user type</option>
            <option value="estudiante">Estudiante</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
      <div className="login-link">
        <a href="/Login">Already have an account? Log in</a>
      </div>
    </div>
  );
};

export default Register;
