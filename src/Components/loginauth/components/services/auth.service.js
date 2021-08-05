import axios from "axios";
import { Redirect } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL + "signin", {username,password})
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));

          // alert(response.data.roles)

        }
        return response.data;
      });
  }

  logout() {
    // localStorage.removeItem("user");
    // localStorage.removeItem("ROLE_MODERATOR")
    // localStorage.removeItem("ROLE_ADMIN")
    localStorage.clear()
    

    return(
      <Redirect to="/home"/>
    )

  }

  register(username, email, password, roles) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      roles
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getListApplicationsComponent(){
    return axios.get("http://localhost:8080/api/v1/applications");
  }
}

export default new AuthService();