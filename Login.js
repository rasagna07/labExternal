import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        Login here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ width: "25%" }}>
            <label>Name</label>
            <input type="text" className="form-control"></input>
            <label>Email</label>
            <input type="email" className="form-control"></input>
            <label>Message</label>
            <textarea className="form-control"></textarea>
            <br />
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
