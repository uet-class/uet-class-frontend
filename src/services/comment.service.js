import axios from "axios";

class CommentService {
    createComment(creatorID, postID, content) {
        return axios.post('/comments', {
            CreatorId: creatorID,
            PostId: postID,
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

    updateComment(commentID, content) {
        return axios.post(`/comments/${commentID}`, {
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

    deleteComment(commentID) {
        return axios.delete(`/comments/${commentID}`)
            .then(function (response) {
                // console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new CommentService();