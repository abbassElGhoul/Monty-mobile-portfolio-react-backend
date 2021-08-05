
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import authService from "./Components/loginauth/components/services/auth.service";
import BoardAdmin from "./Components/loginauth/components/board-admin.component";
import Login from "./Components/loginauth/components/login.component";
import Register from "./Components/loginauth/components/register.component";
import Home from "./Components/loginauth/components/home.component";
import ListApplicationComponent from "./Components/ListApplicationComponent";
import CreateApplicationComponent from './Components/CreateApplicationComponent';
import ViewApp from './Components/ViewApp';
import ViewAppDeveloper from './Components/ViewAppDeveloper';
// import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import PrivateRoute from "./PrivateRoute";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    authService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (

      <Router>
      <div>
        
        <nav className="navbar  navbar-expand navbar-dark bg-dark">

          <div className="navbar-nav mr-auto">
            <li className="nav-item">

            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>



              </li>
            )}

          </div>

          {currentUser ?  (
            <div className="navbar-nav ml-auto">


              <li className="nav-item">
                <a href="/home" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
            
            
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path = "/register" component = {Register}/>
            {showAdminBoard &&
            <PrivateRoute exact path = "/admin" component = {BoardAdmin}/>
            }
            {showModeratorBoard &&
            <PrivateRoute exact path="/mod" component={ListApplicationComponent} />}
            <Route path = "/" exact component = {Home}/>
            <Route path = "/Home" component = {Home}/>
            <PrivateRoute path = "/add-application/:id"  component = {CreateApplicationComponent}/>
            <Route path = "/view-application/:id" component = {ViewApp}/>
            <PrivateRoute path = "/view-application-dev/:id" component = {ViewAppDeveloper}/>
            <PrivateRoute path = "/update-application/:id" component = {CreateApplicationComponent}/>

          </Switch>
        </div>
      </div>
      </Router>

    );
  }
}

export default App;