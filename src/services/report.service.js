import axios from "axios";

class ReportService {
    getReports() {
        return axios.get('/reports')
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    createUserReports(userId, content) {
        return axios.post('/reports', {
            ReporterId: parseInt(localStorage.getItem("userId")),
            ReportObjectID: userId,
            ReportType: "user",
            Message: content
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    deleteReport(reportID) {
        let url = `/reports/${reportID}`
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

export default new ReportService();