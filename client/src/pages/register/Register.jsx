import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    dob: "",
    email: ""
  })

  const [err, setErr] = useState(null)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  } 

  const handleClick = async e => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:5000/api/v1/auth/register', inputs)
    } catch (err) {
     setErr(err.response.data)
    }
  }


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Swim.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            corrupti impedit nihil ab quae dolor. Veniam, cupiditate provident
            doloribus harum nisi iusto perferendis tempore possimus eum dolorem
            iste enim quam.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="E-mail" name="email" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <input type="date" placeholder="dob" name="dob" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
