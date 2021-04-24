import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Login from "./component/auth/Login";
import UsersContainer from "./view/users/UserContainer";
import About from "./view/dashbord/About";
import Headers from "./component/layout/Headers";
import PermissionContainer from "./view/permission/PermissionContainer";
import RoleContainer from "./view/role/RoleContainer";
function App() {
  return (
    <Router className="App ">
      <Headers />

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/users">
          <UsersContainer />
        </Route>
        <Route path="/roles">
          <RoleContainer />
        </Route>
        <Route path="/permission">
          <PermissionContainer />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
