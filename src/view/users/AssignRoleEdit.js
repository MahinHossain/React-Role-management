import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { ListGroup, Form, Col, Table, Button, Row } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import getRolePermissionData from "../../services/role/RolePermissionData";

export default function AssignRoleEdit(props) {
  console.log(`props.userEdiData`, props.userEdiData);
  const [roleList, setroleList] = useState([]);

  const [role, setRole] = useState("");

  const [showModal, setShowModal] = useState(false);

  const rolemasterdata = getRolePermissionData();

  const { userEdiData, submitEdit, onCloseEdit } = props;
  const userdata = userEdiData;
  // const userdata = userData();
  // useEffect(() => {
  //   setUsers(userdata);
  // }, [setUsers]);

  useEffect(() => {
    setroleList(rolemasterdata);
  }, []);

  const changeRole = (e) => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if (role == "") {
      alert("please Inset dta");
      return false;
    }

    const userrole = JSON.parse(role);
    const dataObject = {
      id: userdata.id,
      name: userdata.name,
      password: userdata.password,
      username: userdata.username,
      role: userrole.role,
    };

    submitEdit(dataObject);
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assign role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              User
            </Form.Label>
            <Col sm="10">{props.userEdiData.name}</Col>
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
        <Button variant="danger" onClick={props.onCloseEdit}>
          Close
        </Button>
        <Button variant="primary" onClick={submitRole}>
          Update
        </Button>
      </Modal.Footer>
    </>
  );
}
