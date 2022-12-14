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

    uploadSubmission(classId, assignmentId, creatorId, data) {
        return axios.post(`/submissions/upload`, data, {
            params: {
                classId: classId,
                assignmentId: assignmentId,
                creatorId: creatorId
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

    getUserSubmission(classId, assignmentId, creatorId) {
        return axios.get(`/submissions`, {
            params: {
                classId: classId,
                assignmentId: assignmentId,
                userId: creatorId
            }
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    getClassSubmission(classId, assignmentId) {
        return axios.get(`/submissions/all`, {
            params: {
                classId: classId,
                assignmentId: assignmentId
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

    checkUserSubmission(classId, assignmentId, creatorId) {
        return axios.get(`/submissions`, {
            params: {
                classId: classId,
                assignmentId: assignmentId,
                userId: creatorId
            }
        })
            .then(function (response) {
                if (response.data.message !== null) {
                    return true;
                  } else {
                    return false;
                  }
            })
            .catch(function (error) {
                console.error(error);
                return false;
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

    getAssignment(classId, assignmentID) {
        return axios.get(`/assignments/${assignmentID}`, {
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