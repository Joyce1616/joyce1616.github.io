import Logo from "../../images/logo-desktop.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand"><img src={Logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/searchpage/spot' className="nav-link active">探索景點</Link>
                            <Link to='/searchpage/activity' className="nav-link">節慶活動</Link>
                            <Link to='/searchpage/restaurant' className="nav-link">品嚐美食</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  };
  
export default Nav;