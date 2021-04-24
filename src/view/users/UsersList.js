import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { ListGroup, Table, Button } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import Sidebar from "../../component/layout/Sidebar";

export default function UsersList() {
  const [Users, setUsers] = useState([]);
  const userdata = userData();

  // const [showModal, setshowModal] = useState(false);
  // const handleCloseModal = () => setshowModal(false);
  // const handleCloseModal = () => setshowModal(true);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    setUsers(userdata);
  }, [setUsers]);
  return (
    <div className=" container col-9">
      <h1 className="text-center">User List</h1>
      <div className="float-right">
        {" "}
        <button className="btn btn-success" onClick={handleShowModal}>
          + Assign role{" "}
        </button>
      </div>
      <Table striped bordered hover variant="lite">
        <thead>
          <tr>
            <th> Id</th>
            <th> Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.role.length > 0 ? data.role : "-"}</td>
              <td>
                <button className="btn btn-success">Edit </button>
                <button className="btn btn-danger">Delete </button>
              </td>
            </tr>
          ))}
          {userdata.length == 0 && (
            <div>
              <h3> No Data Found</h3>
            </div>
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
