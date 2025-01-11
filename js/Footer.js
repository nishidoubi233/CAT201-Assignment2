/********************************************
 * Footer.js - Footer introduction and links
 ********************************************/
function Footer() {
    const { Link } = ReactRouterDOM;
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <Link to="/">
                        <img src="https://pic.superbed.cc/item/678292a1fa9f77b4dc8b4741.png" alt="Penang Logo" className="footer-logo" />
                    </Link>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://elearning.usm.my/sidang2425/">Elearning-USM</a></li>
                        <li><a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
                        <li><a href="https://github.com/facebook/react">React GitHub</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>GitHub: <a href="https://github.com/nishidoubi233">@nishidoubi233</a></li>
                        <li>Email: nyhnoob04@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            <p>
            © 2025 USM Penang CAT201W-Assignment 2-Group 6. All rights reserved.
            </p>
            </div>
        </footer>
    );
}
  