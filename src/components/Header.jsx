import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = ({ setRentals, handleChange, form, setForm }) => {
  const fetchData = async () => {
    return await fetch("https://eric.hosthub.com/api/2019-03-01/rentals", {
      method: "GET",
      headers: {
        Authorization: form.key,
      },
    })
      .then((response) => response.json())
      .then((data) => setRentals(data));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setForm(items);
    }
  }, []);

  return (
    <Container className="px-5 py-4 pt-5 mb-5 bg-light" fluid>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Full Name</InputGroup.Text>

        <Form.Control
          placeholder="full Name"
          aria-label="full Name"
          aria-describedby="name"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />

        <InputGroup.Text id="basic-addon2">API Kay</InputGroup.Text>

        <Form.Control
          placeholder="Api key"
          aria-label="Api key"
          aria-describedby="kay"
          name="key"
          value={form.key}
          onChange={(e) => handleChange(e)}
        />
        <Button
          disabled={!form.key.length || !form.name.length}
          onClick={() => fetchData()}
        >
          Display Reantals
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Header;
