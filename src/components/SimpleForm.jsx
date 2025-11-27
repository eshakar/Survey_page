import React, { useState } from "react";
import "../styles/form.scss";

export default function SimpleForm() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <h3>Simple Form</h3>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
