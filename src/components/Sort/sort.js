// import { useState } from "react";
import "./Sort.css";

function Sort({ onChange }) {
  return (
    <select
      className="sort minimal"
      name="sort"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="firstName">Sort By first Name</option>
      <option value="lastName">Sort By last Name</option>
      <option value="age">Sort By age</option>
    </select>
  );
}

export default Sort;
