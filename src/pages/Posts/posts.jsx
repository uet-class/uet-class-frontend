import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/header/header.jsx";
import "./posts.css";

const Posts = () => {
    return (
        <Header>
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <h1 className="content">This is the Posts page</h1>
        </div>
        </Header>
    )
}

export default Posts;
