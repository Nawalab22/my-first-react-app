import React, { useState } from "react";
import Hargeisa from "./Hargeisa";

const Kismayo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [registeredStudents, setRegisteredStudents] = useState([]);

  const handleFormSubmit = () => {
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
      <h1>I am Kismayo </h1>
      <Hargeisa
        onFormSubmit={handleFormSubmit}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
      />
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
};

export default Kismayo;
