/********************************************
 * Contact.js - Contact us page
 ********************************************/

function Contact() {
    const [showModal, setShowModal] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="contact-section">
            <h1 className="contact-title">Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input form-textarea"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>

            {showModal && (
                <div>
                    <div className="modal-overlay" onClick={() => setShowModal(false)} />
                    <div className="feedback-modal">
                        <h2>Thank You!</h2>
                        <p>Your message has been sent successfully.</p>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Ensure the component is exported
window.Contact = Contact; 