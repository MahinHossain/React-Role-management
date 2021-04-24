import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import Sidebar from "../../component/layout/Sidebar";
import PermissionList from "./PermissionList";
export default function PermissionContainer() {
  return (
    <div className="container">
      <div className="row">
        {" "}
        <Sidebar />
        <PermissionList />
      </div>
    </div>
  );
}
