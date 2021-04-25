import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { ListGroup, Form, Col, Table, Button, Row } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import getRolePermissionData from "../../services/role/RolePermissionData";

export default function AssignRole(props) {
  const [Users, setUsers] = useState([]);
  const [roleList, setroleList] = useState([]);

  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const [showModal, setShowModal] = useState(false);

  const rolemasterdata = getRolePermissionData();
  const userdata = userData();
  useEffect(() => {
    setUsers(userdata);
  }, [setUsers]);

  useEffect(() => {
    setroleList(rolemasterdata);
  }, []);
  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changeRole = (e) => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if (user == "" || role == "") {
      alert("please Inset dta");
      return false;
    }

    const userdata = JSON.parse(user);
    const userrole = JSON.parse(role);
    const obj = {
      id: 3434,
      name: userdata.name,
      password: userdata.password,
      username: userdata.username,
      role: userrole.role,
    };

    props.submitData(obj);
  };
  console.log(`assss--`, props);
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Assign role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              User
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                value={user}
                onChange={changeUser}
                required
              >
                <option value="">Please select Users</option>
                {Users.map((item) => (
                  <option value={JSON.stringify(item)}>{item.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Role
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                value={role}
                onChange={changeRole}
                required
              >
                <option>Please Select Role</option>

                {roleList.map((item) => (
                  <option value={JSON.stringify(item)}>{item.role}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.handleCloseModall}>
          Close
        </Button>
        <Button variant="primary" onClick={submitRole}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
}
