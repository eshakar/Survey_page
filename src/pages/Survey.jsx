import React, { useState, useEffect } from "react";
import "../styles/survey.scss";
import { useNavigate } from "react-router-dom";

export default function Survey() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    income: "",
    expenses: "",
    investments: "",
    loan: "",
    risk: "",
    goal: "",
    horizon: "",
  });

  const [valid, setValid] = useState(false);

  // Load saved values (for Recalculate)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("survey-data"));
    if (saved) setForm(saved);
  }, []);

  useEffect(() => {
    const allFilled = Object.values(form).every((val) => val !== "");
    setValid(allFilled);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("survey-data", JSON.stringify(form));
    navigate("/results");
  };

  return (
    <div className="survey-container">
      <h2>Financial Profile Survey</h2>

      <form onSubmit={submitForm}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age (18–50)"
          value={form.age}
          onChange={handleChange}
        />

        <input
          type="number"
          name="income"
          placeholder="Monthly Income (₹)"
          value={form.income}
          onChange={handleChange}
        />

        <input
          type="number"
          name="expenses"
          placeholder="Monthly Expenses (₹)"
          value={form.expenses}
          onChange={handleChange}
        />

        <input
          type="number"
          name="investments"
          placeholder="Current Investments (₹)"
          value={form.investments}
          onChange={handleChange}
        />

        <input 
          type="number"
          name="loan"
          placeholder="Current Loan Amount"
          value={form.loan}
          onChange={handleChange}
        /> 

        <div className="group">
          <label>Risk Tolerance:</label>
          <label>
            <input
              type="radio"
              name="risk"
              value="conservative"
              checked={form.risk === "conservative"}
              onChange={handleChange}
            />{" "}
            Conservative
          </label>
          <label>
            <input
              type="radio"
              name="risk"
              value="moderate"
              checked={form.risk === "moderate"}
              onChange={handleChange}
            />{" "}
            Moderate
          </label>
          <label>
            <input
              type="radio"
              name="risk"
              value="aggressive"
              checked={form.risk === "aggressive"}
              onChange={handleChange}
            />{" "}
            Aggressive
          </label>
        </div>

        <select name="goal" value={form.goal} onChange={handleChange}>
          <option value="">Select Goal</option>
          <option value="wealth">Wealth Creation</option>
          <option value="retirement">Retirement</option>
          <option value="home">Home Purchase</option>
          <option value="other">Other</option>
        </select>

        <div className="slider-box">
          <label>Investment Horizon:
            <strong>{form.horizon} years</strong>
          </label>
          <input 
            type="range"
            name="horizon"
            min="0"
            max="20"
            value={form.horizon}
            onChange={handleChange} 
          />
          {/* <label>
            <input
              type="radio"
              name="horizon"
              value="<5"
              checked={form.horizon === "<5"}
              onChange={handleChange}
            />{" "}
            &lt; 5 years
          </label>
          <label>
            <input
              type="radio"
              name="horizon"
              value="5-10"
              checked={form.horizon === "5-10"}
              onChange={handleChange}
            />{" "}
            5–10 years
          </label>
          <label>
            <input
              type="radio"
              name="horizon"
              value=">10"
              checked={form.horizon === ">10"}
              onChange={handleChange}
            />{" "}
            &gt; 10 years
          </label> */}

        </div>

        <button disabled={!valid}>Submit</button>
      </form>
    </div>
  );
}
