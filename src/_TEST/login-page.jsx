import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login-form.styles.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <Form>
          <Form.Text className="form-text">
            <b>Please enter your credentials</b>
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <span>
            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
            <Button variant="link" className="forgot-password">
              Forgot password
            </Button>
          </span>
          <div className="new-account">
            <Link className="nav-link" to="/new-user">
              <p> Signup for new account?</p>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
