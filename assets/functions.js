document.addEventListener("DOMContentLoaded", function() {
    // Get all tab navigation elements
    const tabItems = document.querySelectorAll(".tab-nav .tn");

    // Get all tab content elements
    const tabContents = document.querySelectorAll(".tab-content .tc");

    // Add click event listener to each tab item
    tabItems.forEach(function(tab, index) {
        tab.addEventListener("click", function() {
            // Remove 'tn-active' class from all tab items
            tabItems.forEach(function(item) {
                item.classList.remove("tn-active");
            });

            // Add 'tn-active' class to the clicked tab item
            tab.classList.add("tn-active");

            // Hide all tab content elements
            tabContents.forEach(function(content) {
                content.classList.add("tc-hide");
            });

            // Show the corresponding tab content based on the index
            tabContents[index].classList.remove("tc-hide");
            tabContents[index].classList.add("tc-show");
        });
    });
});

// Get all elements with the class name 'cobox-slider'
const sliders = document.getElementsByClassName('cobox-slider');

// Function to handle dragging the slider
let isDown = false;
let startX;
let scrollLeft;

// Loop through each slider element and attach event listeners
for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    
    // For mouse events
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the sensitivity of drag
        slider.scrollLeft = scrollLeft - walk;
    });

    // For touch events (mobile devices)
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the sensitivity of drag
        slider.scrollLeft = scrollLeft - walk;
    });
}

// This JavaScript code is optional if you want to make the slideshow stop on hover.

const ptnCont = document.querySelector('.ptn-slide');

ptnCont.addEventListener('mouseenter', () => {
    ptnCont.style.animationPlayState = 'paused';
});

ptnCont.addEventListener('mouseleave', () => {
    ptnCont.style.animationPlayState = 'running';
});



document.addEventListener("DOMContentLoaded", function() {
    const sliderContainers = document.querySelectorAll('.cbs-cont');

    sliderContainers.forEach(container => {
        const slider = container.querySelector('.cobox-slider');
        const dots = container.querySelectorAll('.dot');
        
        function updateDots() {
            const totalScrollWidth = slider.scrollWidth - slider.clientWidth;
            const currentScrollPosition = slider.scrollLeft;
            const activeIndex = Math.round((currentScrollPosition / totalScrollWidth) * (dots.length - 1));
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        }

        slider.addEventListener('scroll', updateDots);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const totalScrollWidth = slider.scrollWidth - slider.clientWidth;
                const targetScrollPosition = (totalScrollWidth / (dots.length - 1)) * index;
                slider.scrollTo({ left: targetScrollPosition, behavior: 'smooth' });
            });
        });

        // Initialize dots
        updateDots();
    });
});



