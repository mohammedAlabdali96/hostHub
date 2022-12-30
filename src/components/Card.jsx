import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalDialog from "./Modal";



const CardRental = ({ rental,apiKey }) => {

  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://app.hosthub.com${rental.image_path}`}
        />
        <Card.Body>
          <Card.Title>{rental.name}</Card.Title>
          <div className="py-3">
            <div className="d-flex justify-content-between">
              <div className="mx-2">check in time:</div>
              <div className="mx-2">{rental.check_in_time}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-2">checkout time:</div>
              <div className="mx-2">{rental.checkout_time}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-2">active:</div>
              <div className="mx-2">{rental.status}</div>
            </div>
          </div>
          <Button
            className="mt-auto"
            variant="primary"
            onClick={() => setIsShowInfo(true)}
            type='button"'
          >
            Rental Information
          </Button>
        </Card.Body>
      </Card>
      <ModalDialog isShow={isShowInfo} setIsShow={setIsShowInfo} apiKey={apiKey} id={rental.id} />
    </>
  );
};

export default CardRental;
