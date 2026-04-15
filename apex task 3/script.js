// Image Carousel JavaScript
const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5'
];

let currentIndex = 0;
const img = document.getElementById('carousel-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateImage() {
    img.src = images[currentIndex];
    img.alt = `Image ${currentIndex + 1}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize carousel
updateImage();

// API Data Fetching JavaScript
const fetchBtn = document.getElementById('fetch-joke');
const jokeP = document.getElementById('joke');

fetchBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        jokeP.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeP.textContent = 'Sorry, couldn\'t fetch a joke right now. Try again later!';
    }
});