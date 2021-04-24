import React, { useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
function Sidebar(props) {
  console.log(`props`, props.history.location.pathname);

  const [pathname] = useState(props.history.location.pathname);

  return (
    // style={{ background: "#FF7F50" }}
    <ListGroup className="col-3 mt-5" as="li">
      <ListGroup.Item
        as="li"
        className={
          pathname == "/users" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link className="font-weight-bold text-dark" to="./users">
          Users
        </Link>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className={
          pathname == "/roles" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link className="font-weight-bold text-dark" to="./roles">
          {" "}
          Role
        </Link>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className={
          pathname == "/permission"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        <Link className="font-weight-bold text-dark" to="./permission">
          {" "}
          Permission
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
export default withRouter(Sidebar);
