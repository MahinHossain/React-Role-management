import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import Sidebar from "../../component/layout/Sidebar";
export default function RoleContainer() {
  return (
    <div className="container">
      <div className="row">
        {" "}
        <Sidebar />
        <h1>Role</h1>
      </div>
    </div>
  );
}
