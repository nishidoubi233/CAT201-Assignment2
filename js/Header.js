/********************************************
 * Header.js - Website top navigation bar
 ********************************************/
function Header() {
    const { Link, useLocation } = ReactRouterDOM;
    const location = useLocation();
    
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://pic.superbed.cc/item/67829256fa9f77b4dc8b4456.jpg" alt="Penang Logo" className="header-logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/attractions" className={location.pathname === "/attractions" ? "active" : ""}>Attractions</Link></li>
                    <li><Link to="/food" className={location.pathname === "/food" ? "active" : ""}>Food</Link></li>
                    <li><Link to="/hotels" className={location.pathname === "/hotels" ? "active" : ""}>Hotels</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
  