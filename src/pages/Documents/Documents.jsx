import Sidebar from "../../components/Sidebar/Sidebar";
import "./Documents.css";

const Documents = () => {
    return (
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <h1 className="content">This is the document page</h1>
        </div>
    )
}

export default Documents;
