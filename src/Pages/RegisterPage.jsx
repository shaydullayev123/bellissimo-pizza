/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// RegistrationForm.js
import React, { useState } from "react";

const RegistrationForm = ({ history }) => {
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Redirect to sign-in page
    history.push("/signin");
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
