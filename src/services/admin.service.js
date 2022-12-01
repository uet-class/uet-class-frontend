import axios from "axios";

class AdminService {
    deleteUser(email) {
        const userId = localStorage.getItem('session')
        return axios.post('/auth/:email', {
            email: email
        }, {
            headers: {
                Cookie: `sessionId=${userId}`
            }
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

export default new AdminService();