import axios from "axios";


class AssignmentService {
    createAssignment(classId, creatorId, data, duedate) {
        return axios.post('/assignments', {
            ClassId: parseInt(classId),
            CreatorId: parseInt(creatorId),
            Title: data.header.value,
            Content: data.content.value,
            Duedate: duedate
        })
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    listAssignment(classId) {
        return axios.get('/assignments', {
            params: {
                classId: classId
            }
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}

export default new AssignmentService();