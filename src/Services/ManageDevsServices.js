import axios from 'axios';
import FormData from 'form-data';
const SINGUP_API_BASE_URL = "http://localhost:8080/api/auth/signup";


class ManageDevesServices {
    
    
    getDevs(){
        return axios.get(SINGUP_API_BASE_URL , {headers : authHeader()})
    }

    getDevsById(UserId){
        return axios.get(SINGUP_API_BASE_URL + "/" + UserId, {headers: authHeader()})
    }
    
}
