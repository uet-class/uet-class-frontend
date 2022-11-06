import axios from "axios";

const API_URL = process.env.REACT_APP_URL;

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "/api/login", {
            username,
            password,
        }).then((response) => {
            return response;
        });
    }
}

export default new AuthService();