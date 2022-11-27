import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class AdminService {
    deleteUser(email) {
        const userId = localStorage.getItem('session')
        return axios.post(API_URL + '/auth/:email', {
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