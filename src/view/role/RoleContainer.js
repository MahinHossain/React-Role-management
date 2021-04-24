import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import Sidebar from "../../component/layout/Sidebar";
import RoleList from "./RoleList";
export default function RoleContainer() {
  return (
    <div className="container">
      <div className="row">
        {" "}
        <Sidebar />
        <RoleList />
      </div>
    </div>
  );
}
