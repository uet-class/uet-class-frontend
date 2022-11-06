import Sidebar from "../Sidebar/sidebar";
import "./home.css";

const Home = () => {
    return (
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <h1 className="content">This is the home page</h1>
        </div>
    )
}

export default Home;
