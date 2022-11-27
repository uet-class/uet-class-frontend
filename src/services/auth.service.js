import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class AuthService {
    login(email, password) {
        return axios.post(API_URL + '/auth/signin', {
            email: email,
            password: password,
        },)
            .then(function (response) {
                // console.log(response.data.message.sessionId)
                // axios.defaults.headers.cookie = response.data.message.sessionId
                localStorage.setItem("sessionId", JSON.stringify(response.data.message.sessionId));
                localStorage.setItem("userId", JSON.stringify(response.data.message.userId));
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    isUser() {
        try {
            const data = JSON.parse(localStorage.getItem("sessionId"));
            if (data) {
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
       
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

    logout() {
        localStorage.removeItem("sessionId");
        localStorage.removeItem("userId");
 
        return axios.post('/auth/signout', {}, {
            // headers: {
            //     Cookie: `sessionId=${userId}`
            // }
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