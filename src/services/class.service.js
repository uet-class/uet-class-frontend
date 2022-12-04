import axios from "axios";


class ClassService {
    createClass(className, description) {
        return axios.post('/class', {
            className: className,
            description: description,
        })
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    listClass() {
        return axios.get('/class/all')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    listClassMaterials(classId) {
        return axios.get(`/class/${classId}/materials`)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    uploadClassMaterial(classId, data) {
        return axios.post(`/class/${classId}/upload-material`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                // console.log(response)
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    inviteMember(classId, email) {
        return axios.post(`/class/${classId}/send-invitation`, email)
            .then(function (response) {
                console.log(response)
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    deleteClassMaterial(classId, fileName) {
        return axios.delete(`/class/${classId}/materials/${fileName}`)
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteClass(classId) {
        let url = `/class/${classId}`
        return axios.delete(url)
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default new ClassService();