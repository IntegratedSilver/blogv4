import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../Services/DataService";

const CreateAccount = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userData = { username, password };
    const result = await createAccount(userData);

    if (result) {
      navigate('/Login');
    } else {
      console.error("Account creation failed.");
    }
  };

  return (
    <Container>
      <Row>
        <Col className="form-container d-flex justify-content-center">
          <Form>
            <p className="text-center">Create Account</p>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="outline-primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccount;
