import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Login() { // Corrected name to Login
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      // const json = await response.json();
      // if(json.success){
      //   navigate("/");
      // }

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data); 
        localStorage.setItem("authToken",data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
        // Handle successful login (e.g., store token, redirect to dashboard)
      } else {
        console.error('Login failed:', response.status, response.statusText);
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error
    }
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="container w-96 bg-orange-400">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailSign" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailSign"
            aria-describedby="emailHelp"
            name="email"
            value={data.name}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordsSign" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordSign"
            name="password"
            value={data.name} // Corrected to data.password
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link to="/SignUp" className="btn btn-primary m-4">
          Sign Up
        </Link>
      </form>
    </div>
  );
}