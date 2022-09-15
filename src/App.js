import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditModal";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/adduser">
              <AddUser />
            </Route>
            <Route path="/edituser">
              <EditUser />
            </Route>
            <Route path="/">
              <AllUsers />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
