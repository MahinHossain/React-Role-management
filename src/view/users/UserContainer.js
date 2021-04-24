import React from "react";

import Sidebar from "../../component/layout/Sidebar";
import UsersList from "./UsersList";
export default function users() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <UsersList />
      </div>
    </div>
  );
}
