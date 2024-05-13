// App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [registeredStudents, setRegisteredStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      age: age,
    };
    setRegisteredStudents([...registeredStudents, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div className="App">
      <h1>Register Students</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <h2>Registered Students:</h2>
      <ul>
        {registeredStudents.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
