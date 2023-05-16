import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Name" />
            <input type="date" placeholder="dob" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
