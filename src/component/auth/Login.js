import { Form, Button, Card, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import checkLoginService from "./LoginService";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errormassage: "",
    isLogged: false,
  };
  componentDidMount() {
    let UserData = JSON.parse(localStorage.getItem("userdata"));
    if (UserData.username && UserData.username.length > 0) {
      this.props.history.push("./users");
    }
  }

  // handleonChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  submitData = (e) => {
    e.preventDefault();
    if (checkLoginService(this.state)) {
      this.setState({ errormassage: "" });
      this.setState({ isLogged: true });
      localStorage.setItem("userdata", JSON.stringify(this.state));

      //লগিং সাকসেস হলে সে এই পেজে রিডিরেক্ট করে যাবে এজন্য এক্সপোর্ট ডিফল্ট কে উইথ রাউটার দিয়ে বাইন্ড করতে হবে
      // উইথ রাউটার দিয়ে মাইন্ড না করলে হিস্টরি পাওয়া যাবে না
      this.props.history.push("./users");
    } else {
      this.setState({ errormassage: "Invalid username " });
    }
  };

  render() {
    return (
      <div>
        <div className="container custom-center d-flex justify-content-center p3 m3">
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", size: "30rem" }}>
                Login{" "}
              </Card.Title>
              {this.state.errormassage.length > 0 ? (
                <div class="alert alert-danger" role="alert">
                  Invalid
                </div>
              ) : (
                <div></div>
              )}
              {this.state.isLogged ? (
                <div class="alert alert-success" role="alert">
                  {" "}
                  successfull
                </div>
              ) : (
                <div></div>
              )}
              <Form onSubmit={this.submitData}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>username </Form.Label>
                  <Form.Control
                    type="username"
                    name="username"
                    placeholder="username"
                    onChange={this.changeUsername}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.changePassword}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>{" "}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
