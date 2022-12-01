import axios from "axios";

class AdminService {
    deleteUser(email) {
        let url = `/user/${email}`
        return axios.delete(url, { withCredentials: true })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new AdminService();