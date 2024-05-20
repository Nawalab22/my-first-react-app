import React from "react";

const Hargeisa = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit();
  };

  return (
    <div>
      <h1>I am Hargeisa</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={props.age}
          onChange={(e) => props.setAge(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Hargeisa;
