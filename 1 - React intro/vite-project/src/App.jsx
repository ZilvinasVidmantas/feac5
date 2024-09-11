import React, { useState } from "react";
import "./App.css";
import { TextField } from "./components/TextField/TextField";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit the form (for now just console log)
      console.log("Form submitted", formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(formData.email.trim())) {
      errors.email = "Please enter a valid email";
    }
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          error={formErrors.username}
        />
        <TextField
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={formErrors.email}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={formErrors.password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;