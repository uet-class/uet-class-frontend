import axios from "axios";

class UserService {
    updateUserInfo(data) {
        const userId = localStorage.getItem("userId")
        return axios.post(`/user/${userId}`, {
            FullName: data.fullname.value,
            DateOfBirth: data.dateOfBirth.value,
            // Password: "1",
            // PhoneNumber: data.phoneNumber.value
        })
            .then(function (response) {

                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateUserAvatar(avartar) {
        const userId = localStorage.getItem("userId")
        return axios.post(`/user/${userId}/upload-avatar`, {
            avatar: avartar
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {

                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    getUserInfo() {
        const userId = localStorage.getItem("userId")
        return axios.get(`/user/${userId}`)
            .then(function (response) {
                // console.log(response.data.message)
                return response.data.message
            })
            .catch(function (error) {
                console.log(error);
                return false
            });
    }
}

export default new UserService();