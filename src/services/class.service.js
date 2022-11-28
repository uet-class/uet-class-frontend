import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

class ClassService {
    createClass(className, description) {
        // document.cookie = `sessionId=${localStorage.getItem("sessionId")}`;
        return axios.post(API_URL + '/class', {
            className: className,
            description: description,
        },{withCredentials: true})
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    listClass() {
        return axios.get(API_URL + '/class/all', {
            withCredentials: true,
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    deleteClass() {
        // document.cookie = `sessionId=${localStorage.getItem("sessionId")}`;
        return axios.delete(API_URL + '/class').then(function (response) {
            console.log(response);
            return response;
        },{
            withCredentials: true,
        })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default new ClassService();