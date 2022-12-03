import axios from "axios";

class ReportService {
    getReports() {
        return axios.get('/report', {
            withCredentials: true,
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export default new ReportService();