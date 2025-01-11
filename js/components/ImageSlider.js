function ImageSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [imageError, setImageError] = React.useState(false);
    
    // Set assets absolute path
    const assetsPath = "D:/Code/JavaScript/CAT201_Assignment_2/assets/";

    const images = [
        "https://www.jetstar.com/_/media/destinations/images/malaysia/penang/poi/murals-1.jpg?w=720&rc=1&cw=720&ch=450&cx=15&cy=0&hash=9DD4987A96C934C3B3FA3C6FBA233FB5338189B9",
        "https://www.agoda.com/wp-content/uploads/2024/07/Penang-Malaysia-George-Town-1244x700.jpg"
    ];

    // Add fallback image for error handling
    const fallbackImage = "https://via.placeholder.com/800x400?text=Image+Not+Found";

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Auto play
    React.useEffect(() => {
        const timer = setInterval(goToNext, 5000); // Switch every 5 seconds
        return () => clearInterval(timer); // Clear timer
    }, [currentIndex]);

    // Image pre-loading and error handling
    React.useEffect(() => {
        const img = new Image();
        img.src = images[currentIndex];
        img.onerror = () => setImageError(true);
        img.onload = () => setImageError(false);
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div className="slider-arrow left-arrow" onClick={goToPrevious}>
                ❮
            </div>
            <div className="slider-arrow right-arrow" onClick={goToNext}>
                ❯
            </div>
            <div 
                className="slide" 
                style={{
                    backgroundImage: `url(${imageError ? fallbackImage : images[currentIndex]})`
                }}
            >
            </div>
        </div>
    );
} 