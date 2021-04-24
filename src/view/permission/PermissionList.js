import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import getPermissionMasterData from "../../services/permission/PermissionMasterData";
import Sidebar from "../../component/layout/Sidebar";

export default function PermissionList() {
  const [permissionList, setpermissionList] = useState([]);

  const permisisommasterdata = getPermissionMasterData();

  useEffect(() => {
    setpermissionList(permisisommasterdata);
  }, [setpermissionList]);
  return (
    <div className=" container col-9">
      <h1 className="text-center">Permission List</h1>
      <Table striped bordered hover variant="lite">
        <thead>
          <tr>
            <th> Id</th>
            <th> Name</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {permisisommasterdata.map((data, index) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>

              <td>
                <button className="btn btn-success">Edit </button>
                <button className="btn btn-danger">Delete </button>
              </td>
            </tr>
          ))}
          {permissionList.length == 0 && (
            <div>
              <h3> No Data Found</h3>
            </div>
          )}
        </tbody>
      </Table>
    </div>
  );
}
