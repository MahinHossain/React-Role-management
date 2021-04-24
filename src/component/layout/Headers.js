import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Headers(props) {
  const [islogout, setislogout] = useState(false);
  const [islogged, setlogged] = useState(false);

  useEffect(() => {
    let UserData = JSON.parse(localStorage.getItem("userdata")) || undefined;

    if (typeof UserData != "undefined") {
      if (UserData.username && UserData.username.length > 0) {
        setlogged(true);
      } else {
        setlogged(false);
      }
    }
  });

  const logout = () => {
    localStorage.removeItem("userdata");
    alert("logout");

    props.history.push("./");
    setislogout(true);
    setlogged(false);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Role-Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!islogged && (
            <Nav.Link href="#home">
              <Link to="/">Login</Link>
            </Nav.Link>
          )}

          {islogged && (
            <>
              {" "}
              <Nav.Link href="#link">
                <Link to="/users"> Users</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/about">About</Link>
              </Nav.Link>{" "}
              <Nav.Link href="#link">
                <Link onClick={logout}>Logout</Link>
              </Nav.Link>
            </>
          )}

          {/* {localStorage.getItem("userdata") == null ? (
            <p></p>
          ) : (
            <Nav.Link href="#link">
              <Link onClick={logout}>Logout</Link>
            </Nav.Link>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Headers);
