import axios from "axios";

class PostService {
    createPost(classID, creatorID, title, content) {
        return axios.post('/posts', {
            ClassId: classID,
            CreatorId: creatorID,
            Title: title,
            Content: content,
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAllPosts(classID) {
        return axios.get('/posts',
            {
                params: {
                    classId: classID
                }
            })
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getPost(postID) {
        return axios.get(`/posts/${postID}`)
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

export default new PostService();