import axios from "axios";

class UserService {
    updateUserInfo(data) {
        const userId = localStorage.getItem("userId")
        return axios.post(`/user/${userId}`,  {
            FullName: data.fullname.value,
            DateOfBirth: data.dateOfBirth.value,
            Password: "1",
            PhoneNumber: data.phoneNumber.value
        },)
            .then(function (response) {

                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getUserInfo() {
        const userId = localStorage.getItem("userId")
        return axios.get(`/user/${userId}`, {
            withCredentials: true
        })
            .then(function (response) {
                // console.log(response.data.message)
                return response.data.message
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new UserService();