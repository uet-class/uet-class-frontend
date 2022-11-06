import Sidebar from "../../components/Sidebar/sidebar";
import "./posts.css";

const Posts = () => {
    return (
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <h1 className="content">This is the Posts page</h1>
        </div>
    )
}

export default Posts;
