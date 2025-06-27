
// Carousel functionality for home page
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.carousel-item');
    
    if (!track || !prevBtn || !nextBtn || items.length === 0) return;
    
    let currentIndex = 0;
    const itemsToShow = window.innerWidth <= 768 ? 1 : 3;
    const maxIndex = Math.max(0, items.length - itemsToShow);
    
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth; // item width + gap
        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        currentIndex = 0;
        updateCarousel();
    });
    
    // Initialize carousel
    updateCarousel();
    
    // Auto-play carousel
    setInterval(function() {
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    }, 5000);
});
