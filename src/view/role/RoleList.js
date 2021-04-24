import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import getRolePermissionData from "../../services/role/RolePermissionData";
import Sidebar from "../../component/layout/Sidebar";

export default function RoleList() {
  const [roleList, setroleList] = useState([]);

  const rolemasterdata = getRolePermissionData();

  useEffect(() => {
    setroleList(rolemasterdata);
  }, []);
  return (
    <div className=" container col-9">
      <h1 className="text-center">Role List</h1>
      <Table striped bordered hover variant="lite">
        <thead>
          <tr>
            <th> Id</th>
            <th> Name</th>

            <th>permission</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rolemasterdata.map((data, index) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.role}</td>

              <td>
                {data.permission.map((permi) => (
                  // <p class="badge badge-light">{permi.name}</p>
                  <p className="absolute-center text-light badge-pill badge-success  ">
                    {permi.name}
                  </p>
                ))}
              </td>
              <td>
                <button className="btn btn-success">Edit </button>
                <button className="btn btn-danger">Delete </button>
              </td>
            </tr>
          ))}
          {roleList.length == 0 && (
            <div>
              <h3> No Data Found</h3>
            </div>
          )}
        </tbody>
      </Table>
    </div>
  );
}
