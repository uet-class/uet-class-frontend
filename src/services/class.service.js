import axios from "axios";

class ClassService {
    createClass(className, description) {
        document.cookie = `sessionId=${localStorage.getItem("sessionId")}`;
        return axios.post('/class', {
            className: className,
            description: description,
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
            withCredentials: true,
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    deleteClass(classID) {
        document.cookie = `sessionId=${localStorage.getItem("sessionId")}`;
        const id = classID
        const url = `/class/${id}`;
        return axios.delete(url).then(function (response) {
            console.log(response);
            return response;
        })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default new ClassService();