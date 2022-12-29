import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import CardRental from "./components/Card";
import ModalDialog from "./components/Modal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [rentals, setRentals] = useState([]);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [form, setForm] = useState({
    name: "",
    key: "",
  });

  const handleChange = (e) => {
    let set = {};
    set[e.target.name] = e.target.value;
    setForm({
      ...form,
      ...set,
    });
  };

  useEffect(() => {
    if (form.key.length !== 0 && form.name.length !== 0) {
      localStorage.setItem("data", JSON.stringify(form));
    }
  }, [form]);

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        setForm={setForm}
        form={form}
        setRentals={setRentals}
      />
      <Container>
        {rentals.length !== 0 ? (
          <Row className="d-flex justify-content-center">
            {rentals.data.map((rental) => (
              <Col key={Math.random()} className="d-flex aling-item-strech">
                <CardRental rental={rental} setIsShowInfo={setIsShowInfo} />
              </Col>
            ))}
          </Row>
        ) : (
          <h1>PLS, Submit the form with your full name & API key</h1>
        )}
      </Container>
    </div>
  );
}

export default App;
