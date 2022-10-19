import { Link } from "react-router-dom";

function Header() {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Blog App</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/blog">All Blogs</Link></li>
                    <li><Link to="/blog/add">Add Blog</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;