import axios from "axios";

class UserService {
    updateUserInfo(data) {
        // console.log(data.dateOfBirth.value)
        // console.log(data.fullname.value)
        // console.log(data.phoneNumber.value)
        const userId = localStorage.getItem("userId")
        return axios.post(`/user/${userId}`,  {
            FullName: data.fullname.value,
            DateOfBirth: data.dateOfBirth.value,
            Password: "https://some.image.com",
            PhoneNumber: data.phoneNumber.value
        },)
            .then(function (response) {
                console.log(response.data.message.sessionId)
                axios.defaults.headers.cookie = response.data.message.sessionId
                localStorage.setItem("sessionId", JSON.stringify(response.data.message.sessionId));
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new UserService();