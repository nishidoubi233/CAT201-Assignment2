/********************************************
 * Guide.js - Guide section (can be removed)
 ********************************************/
function Guide() {
    const { Link } = ReactRouterDOM;
    
    return (
        <section className="guide-section">
            <h1 className="guide-title">Penang Travel Guide</h1>
            <div className="guide-grid">
                <Link to="/attractions" className="guide-card">
                    <div className="icon">
                        <i className="fas fa-landmark"></i>
                    </div>
                    <h2>Attractions</h2>
                </Link>
                
                <Link to="/hotels" className="guide-card">
                    <div className="icon">
                        <i className="fas fa-hotel"></i>
                    </div>
                    <h2>Hotels</h2>
                </Link>
                
                <Link to="/food" className="guide-card">
                    <div className="icon">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <h2>Food</h2>
                </Link>
                
                <Link to="/contact" className="guide-card">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <h2>Contact Us</h2>
                </Link>
            </div>
        </section>
    );
}
  