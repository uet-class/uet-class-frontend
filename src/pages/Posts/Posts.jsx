import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import "./Posts.css";

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
