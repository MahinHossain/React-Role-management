import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { ListGroup, Form, Col, Table, Button, Row } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import Sidebar from "../../component/layout/Sidebar";
import AssignRole from "./AssignRole";
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

  const submitAssignRole = (user) => {
    const userdata = Users;
    userdata.unshift(user);
    setUsers(userdata);
    setShowModal(false);
  };
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
        <AssignRole
          submitData={submitAssignRole}
          handleCloseModall={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
