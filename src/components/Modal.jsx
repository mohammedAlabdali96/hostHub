import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalDialog({ isShow, setIsShow, form }) {
  const [events, setEvents] = useState({});

  const fetchData = async () => {
    return await fetch(
      "https://eric.hosthub.com/api/2019-03-01/calendar-events",
      {
        method: "GET",
        headers: {
          Authorization: form.key,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setEvents(data));
  };

  useEffect(() => {
    if (form.key !== "") {
      fetchData();
    }
  }, [isShow]);

  const initModal = () => {
    return setIsShow(false);
  };

  if (Object.keys(events).length === 0) return;

  return (
    <>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Calender envents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {events.data.map((calenderEvent) => (
            <div className="border m-3 p-3" key={Math.random()}>
              <h4 className="text-center">{calenderEvent.rental.name}</h4>

              <div className="d-flex justify-content-between">
                <div className="mx-2">date from:</div>
                <div className="mx-2">{calenderEvent.date_from}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="mx-2">date to:</div>
                <div className="mx-2">{calenderEvent.date_to}</div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
