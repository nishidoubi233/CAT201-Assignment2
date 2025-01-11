/********************************************
 * Hotels.js - Penang hotels page
 ********************************************/

function Hotels() {
    return (
        <div className="content-section">
            <h1 className="content-title">Penang Hotels</h1>
            <div className="hotels-grid">
                <div className="hotel-card">
                    <div className="hotel-image">
                        <img src="https://pic.superbed.cc/item/678292b5fa9f77b4dc8b47f9.jpg" alt="Noordin Mews" />
                        <div className="hotel-overlay">
                            <div className="hotel-details">
                                <h4>Address: 53, Lebuh Noordin, 10300 George Town</h4>
                                <h4>Phone: 04-263 7125</h4>
                                <a href="https://www.noordinmews.com/" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="book-now">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-info">
                        <h3>Noordin Mews Heritage Hotel</h3>
                        <p>Nestled in the heart of Penang's heritage centre, Noordin Mews is an intimate 1920s Peranakan shophouse turned hotel. With rooms meticulously restored to capture the essence of a simpler age.</p>
                    </div>
                </div>
                <div className="hotel-card">
                    <div className="hotel-image">
                        <img src="https://pic.superbed.cc/item/678292b5fa9f77b4dc8b47f6.jpg" alt="SAVV Hotel" />
                        <div className="hotel-overlay">
                            <div className="hotel-details">
                                <h4>Address: 39C, Pengkalan Weld, George Town</h4>
                                <h4>Phone: 019-239 7228</h4>
                                <a href="https://savvhotel.com/" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="book-now">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-info">
                        <h3>SAVV Hotel</h3>
                        <p>Savv Hotel is conveniently located within the UNESCO World Heritage Site of Georgetown. We are situated right at the city waterfront overlooking the Clan Jetties with easy access to Penang famous local street food, historical sites, street arts, diverse architecture, quaint cafes and bars, all within walking distances.</p>
                    </div>
                </div>
                <div className="hotel-card">
                    <div className="hotel-image">
                        <img src="https://pic.superbed.cc/item/67829256fa9f77b4dc8b445c.jpg" alt="G Hotel" />
                        <div className="hotel-overlay">
                            <div className="hotel-details">
                                <h4>Address: 2, Persiaran Maktab, 10250 George Town</h4>
                                <h4>Phone: 04-238 0000</h4>
                                <a href="https://kelawai.ghotel.com.my/" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="book-now">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-info">
                        <h3>G Hotel Kelawai</h3>
                        <p>G Hotel Kelawai houses 208 rooms that are uniquely inspired by innovative design to create energising spaces for guests to play and work by day or mix and mingle by night. In fact, the hotel also accommodates three trendy and stylish food and beverage outlets – SPOON, 2PM and Gravity rooftop bar that are set to satisfy our guests' gastronomic appetites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 