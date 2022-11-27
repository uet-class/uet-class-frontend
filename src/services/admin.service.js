import axios from "axios";

class AdminService {
    deleteUser(email) {
        document.cookie = `sessionId=${localStorage.getItem("sessionId")}`;
        const userEmail = email
        const url = `/user/${userEmail}`;
        return axios.delete(url).then(function (response) {
            console.log(response);
            return response;
        })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new AdminService();