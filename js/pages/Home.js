/********************************************
 * Home.js - Home page
 ********************************************/

function Home() {
    const scrollToVideo = () => {
        document.querySelector('.video-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    return (
        <div className="home-container">
            <div className="intro-section">
                <div className="intro-wrapper">
                    <div className="intro-image">
                        <img src="https://pic.superbed.cc/item/67829256fa9f77b4dc8b445f.jpg" alt="Penang View" />
                    </div>
                    <div className="intro-content">
                        <h1>Enjoy in Penang Island</h1>
                        <p>Explore Penang's rich history and culture, savor its delectable cuisine, discover its breathtaking attractions, and make the most of your life in this enchanting island!</p>
                        <button onClick={scrollToVideo} className="start-button">Start Now</button>
                    </div>
                </div>
            </div>
            <div className="video-section">
                <h2>Discover Penang</h2>
                <div className="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/KeDSg4Y_njg"
                        title="Penang Travel Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-description">
                    <p>Experience the charm of Penang - where heritage meets modernity, and culinary delights await at every corner. From historic Georgetown to pristine beaches, discover why Penang is Malaysia's cultural gem.</p>
                </div>
            </div>
            <Guide />
            <div className="why-visit-section">
                <div className="why-visit-content">
                    <h1 className="why-visit-title">Why Visit Penang?</h1>
                    <div className="why-visit-text">
                        <p>
                            The Malaysian state of Penang seems to have been designed specifically for the enjoyment of its visitors. Its <span className="highlight">heritage buildings</span>, <span className="highlight">vibrant street art</span>, and <span className="highlight">delightful blend of multicultural cuisine</span> beckon travelers to return—and indeed, many do.
                        </p>
                        <p>
                            Some of the most memorable things to do in Penang include exploring the colorful lanes of <span className="highlight">George Town</span>, a UNESCO World Heritage Site, taking in the panoramic views from <span className="highlight">Penang Hill</span>, or admiring the majestic <span className="highlight">Kek Lok Si Temple</span>. By evening, you can wander through the bustling night markets sampling local favorites like <span className="highlight">Char Kuey Teow</span> and <span className="highlight">Asam Laksa</span>, or take a leisurely stroll along <span className="highlight">Gurney Drive</span> to soak in the lively atmosphere.
                        </p>
                        <p>
                            It's always a good time to visit Penang. Depending on where you're flying from, you can either make the most of the <span className="highlight">low-cost airlines</span> arriving at Penang International Airport from nearby destinations, or opt for one of its direct long-haul flights if you're coming from farther away. If you have children, why not surprise them with a visit to <span className="highlight">Batu Ferringhi's</span> sandy beaches or the fascinating butterfly sanctuary at <span className="highlight">Entopia</span>?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 