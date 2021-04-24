import React, { useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import userData from "../../component/auth/UserData";
import Sidebar from "../../component/layout/Sidebar";

export default function UsersList() {
  const [Users, setUsers] = useState([]);

  const userdata = userData();
  return (
    <div className=" container col-9">
      <h1 className="text-center">User List</h1>
      <Table striped bordered hover variant="dark">
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
          {userdata.map((data, index) => (
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
    </div>
  );
}
