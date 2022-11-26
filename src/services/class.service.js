import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class ClassService {
    createClass(className, description) {
        const userId = localStorage.getItem('sessionId')
        return axios.post(API_URL + '/class', {
            className: className,
            description: description,
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

    listClass() {
        return axios.get('/class/all', {
            // withCredentials: true,
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}

export default new ClassService();