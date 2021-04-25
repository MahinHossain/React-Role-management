import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { ListGroup, Form, Col, Table, Button, Row } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import Sidebar from "../../component/layout/Sidebar";
import AssignRole from "./AssignRole";
import AssignRoleEdit from "./AssignRoleEdit";
export default function UsersList() {
  const [Users, setUsers] = useState({
    userdataAll: [],
  });
  const userdata = userData();

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [editData, seteditData] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleEditCloseModal = () => setshowEditModal(false);
  const handleEditShowModal = () => setshowEditModal(true);

  useEffect(() => {
    const userdat = { ...Users };
    userdat.userdataAll = userdata;
    setUsers(userdat);
  }, [setUsers]);

  const submitAssignRole = (user) => {
    console.log(`user`, user);

    const userdata = { ...Users };
    console.log(`userdata`, userdata);
    // userdata.userdataAll.unshift(user);
    for (let i = 0; i < userdata.userdataAll.length; i++) {
      if (userdata.userdataAll[i].id === user.id) {
        userdata.userdataAll[i] = user;
      }
    }

    setUsers(userdata);
    setShowModal(false);
    alert("Role Assign Successfull");
  };
  const submitAssignRoleEdit = (user) => {
    const userdata = { ...Users };

    for (let i = 0; i < userdata.userdataAll.length; i++) {
      const element = userdata.userdataAll[i];
      if (user.id == element.id) {
        element.role = user.role;
      }
    }
    setUsers(userdata);
    setshowEditModal(false);
    alert("Role Updated ");
  };

  const deleteUser = (id) => {
    const userdata = { ...Users };
    userdata.userdataAll.splice(id, 1);
    setUsers(userdata);
  };
  const editeUser = (item) => {
    const userdata = { ...Users };
    seteditData(item);
    handleEditShowModal();
  };

  console.log(`Users.userdataAll final`, Users.userdataAll);
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
          {Users.userdataAll.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.role.length > 0 ? data.role : "-"}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => editeUser(data)}
                >
                  Edit{" "}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(index)}
                >
                  Delete{" "}
                </button>
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
      {/* for update role ..start */}
      <Modal show={showEditModal} onHide={handleEditCloseModal}>
        <AssignRoleEdit
          submitEdit={submitAssignRoleEdit}
          onCloseEdit={handleEditCloseModal}
          userEdiData={editData}
        />
      </Modal>

      {/* end */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <AssignRole
          submitData={submitAssignRole}
          handleCloseModall={handleCloseModal}
        />
      </Modal>
    </div>
  );
}
