/********************************************
 * Header.js - Website top navigation bar with mobile responsive support
 ********************************************/
function Header() {
    const { Link, useLocation } = ReactRouterDOM;
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Add this effect to handle body scroll
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);
    
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://pic.superbed.cc/item/67829256fa9f77b4dc8b4456.jpg" alt="Penang Logo" className="header-logo" />
                </Link>
            </div>
            
            {/* Add mobile menu button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/attractions" className={location.pathname === "/attractions" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Attractions</Link></li>
                    <li><Link to="/food" className={location.pathname === "/food" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Food</Link></li>
                    <li><Link to="/hotels" className={location.pathname === "/hotels" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Hotels</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
  