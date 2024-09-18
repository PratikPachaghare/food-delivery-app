import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SignUp(){
  const [data, setData] = useState({ name: "", email: "", password: "", location: "" });

    const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(JSON.stringify({name:data.name,email:data.email,password:data.password,location:data.location}))

  try {
    const response = await fetch('http://localhost:5000/api/CreatUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({name:data.name,email:data.email,password:data.password,location:data.location})});

    if (response.ok) {
      const data = await response.json();
      console.log('User created successfully:', data);
      // Handle success (e.g., redirect to login page)
    } else {
      console.error('Error creating user:', response.status, response.statusText);
      // Handle error (e.g., display an error message)
    }
  } catch (error) {
    console.error('Network error:', error);
    // Handle network error
  }
};

  // const handleData = async (e)=> {
        
  //   e.preventDefault();
  //   console.log(JSON.stringify({name:data.name,email:data.email,password:data.password,location:data.location}))
  //     const response = await fetch("http://localhost:5000/api/CreateUser", {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body:JSON.stringify({name:data.name,email:data.email,password:data.password,location:data.location})});
      
  //     //   const josne = await response.json();
  //     //   console.log(josne);
      
  //     // if(!josne.success){
  //     //   alert("enter the valid data");
  //     // }
      
  // }

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="container w-96 bg-orange-400">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameSign" className="form-label">
            Your Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameSign"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
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
            value={data.email}
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
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="locationSign" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="locationSign"
            name="location"
            value={data.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/Logein" className="btn btn-primary m-4">
          Already SignUp
        </Link>
      </form>
    </div>
  );
}