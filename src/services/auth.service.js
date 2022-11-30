import axios from "axios";
import UserService from "./user.service";

class AuthService {
    login(email, password) {
        return axios.post('/auth/signin', {
            email: email,
            password: password,
        },{withCredentials:true})
            .then(function (response) {
                // console.log(response.data.message.sessionId)
                // axios.defaults.headers.cookie = response.data.message.sessionId
                // localStorage.setItem("sessionId", JSON.stringify(response.data.message.sessionId));
                localStorage.setItem("userId", JSON.stringify(response.data.message.userId));
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async isUser(navigate) {
        try {
            await UserService.getUserInfo()
            .then((res) => {
                console.log(res)
                if (res === false){
                    navigate("/signin");
                    return false
                }
                return true
            })
        }
        catch (e) {
            navigate("/signin");
            return false;
        }
       
    }

    register(email, password) {
        return axios.post('/auth/signup', {
            email: email,
            password: password,
        })
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    logout() {
        localStorage.removeItem("sessionId");
        localStorage.removeItem("userId");
 
        return axios.post('/auth/signout', {},{withCredentials: true})
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new AuthService();