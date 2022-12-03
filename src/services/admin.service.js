import axios from "axios";

class AdminService {
    deleteUser(email) {
        let url = `/user/${email}`
        return axios.delete(url)
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAllClass() {
        return axios.get('/class/all-classes', {
            withCredentials: true,
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export default new AdminService();