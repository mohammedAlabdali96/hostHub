import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [rentals, setRentals] = useState([]);
  const [form, setForm] = useState({
    name: "",
    key: "",
  });

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        setForm={setForm}
        form={form}
        setRentals={setRentals}
      />
    </div>
  );
}

export default App;
