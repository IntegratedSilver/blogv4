import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { login, GetLoggedInUser } from "../Services/DataService";

const Login = ({ onLogin }) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userData = { username, password };
    const tokenResponse = await login(userData);

    if (tokenResponse?.token) {
      localStorage.setItem("Token", tokenResponse.token);
      localStorage.setItem("UserData", JSON.stringify(userData));
      const loggedInUser = await GetLoggedInUser(username);
      onLogin(loggedInUser);
      navigate('/Dashboard');
    } else {
      console.error("Login failed.");
    }
  };

  return (
    <Container>
      <Row>
        <Col className="form-container d-flex justify-content-center">
          <Form>
            <p className="text-center">Login</p>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="outline-primary" onClick={handleSubmit}>
              Login
            </Button>
            <p className="mt-3">Don't have an account?</p>
            <Button variant="outline-primary" onClick={() => navigate('/CreateAccount')}>
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
