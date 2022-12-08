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
}

export default new CommentService();