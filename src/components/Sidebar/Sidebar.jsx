import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="pt-3">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/posts" className="nav-link">
                        Posts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/documents" className="nav-link">
                        Documents
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/assignments" className="nav-link">
                        Assignments
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
