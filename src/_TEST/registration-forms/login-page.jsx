import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login-form.styles.scss";
import VerifyUserLogin from "../authentication/authentication";
import { async } from "@firebase/util";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //const res = VerifyUserLogin(email, password);
    //console.log("r" + res);

    fetch(
      `http://localhost:4000/verify_user?email=${email}&password=${password}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data != "" && data != "False") {
          console.log("welcome " + data);
        } else {
          alert("Please check username/password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Text className="form-text">
            <b>Please enter your credentials</b>
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
            />
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
