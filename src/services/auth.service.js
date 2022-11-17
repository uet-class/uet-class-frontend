import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/auth/signin', {
            email: email,
            password: password,
        })
            .then(function (response) {
                if (response.data.message === "Succeed") {
                    sessionStorage.setItem("user", JSON.stringify(response.headers));
                }
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    isUser() {
        const data = JSON.parse(sessionStorage.getItem("user"));
        if (data) {
            return true;
        }
        return false;
    }

    register(email, password) {
        return axios.post(API_URL + '/auth/signup', {
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new AuthService();