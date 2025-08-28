// A central place for all JavaScript functionality

// This function manages which page section is visible
function showPage(pageId) {
    // Hide all sections first
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the requested section
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Set the initial page to 'home' when the page loads
    showPage('home');

    // Bootstrap Toast initialization
    const showToastBtn = document.getElementById('showToastBtn');
    if (showToastBtn) {
        showToastBtn.addEventListener('click', () => {
            const toastLiveExample = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });
    }

    // JavaScript Quote Generator functionality
    const quotes = [
        {
            text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
            author: "Albert Einstein"
        },
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    ];

    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    if (newQuoteBtn && quoteText && quoteAuthor) {
        // Function to display a random quote
        function displayRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            
            // Add a small animation to the text change
            quoteText.style.opacity = '0';
            quoteAuthor.style.opacity = '0';

            setTimeout(() => {
                quoteText.textContent = `"${randomQuote.text}"`;
                quoteAuthor.textContent = `- ${randomQuote.author}`;
                quoteText.style.opacity = '1';
                quoteAuthor.style.opacity = '1';
            }, 300); // Wait for the fade out before changing text
        }
        
        newQuoteBtn.addEventListener('click', displayRandomQuote);
        // Display an initial quote when the page loads
        displayRandomQuote();
    }
});

// CSS Demo functions - made globally available
window.changeNebulaColor = function() {
    const items = document.querySelectorAll('.nebula-item');
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6'];
    items.forEach(item => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.style.backgroundColor = randomColor;
    });
}

window.toggleNebulaAnimation = function() {
    const items = document.querySelectorAll('.nebula-item');
    let isAnimationPaused = items[0].style.animationPlayState === 'paused';
    
    if (isAnimationPaused) {
        // Resume animation
        items.forEach(item => item.style.animationPlayState = 'running');
    } else {
        // Pause animation
        items.forEach(item => item.style.animationPlayState = 'paused');
    }
}