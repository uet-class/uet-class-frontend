import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class ClassService {
    createClass(className, description) {
        return axios.post(API_URL + /class/, {
            className: className,
            description: description,
        })
            .then(function (response) {
                console.log(response)
                return response;
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}

export default new ClassService();