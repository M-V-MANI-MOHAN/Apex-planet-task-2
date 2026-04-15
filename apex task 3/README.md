# Advanced CSS & JavaScript Interactive Site

This project demonstrates advanced skills in CSS and JavaScript for building interactive, responsive websites. It includes:

- **Responsive Design**: Uses media queries to adjust layouts for mobile, tablet, and desktop devices.
- **Interactive Image Carousel**: A JavaScript-powered carousel that allows users to navigate through images.
- **API Data Fetching**: Fetches random jokes from a public API and displays them dynamically.

## Features

### Responsive Design
- Header adjusts font sizes on smaller screens.
- Carousel layout changes from horizontal to vertical on mobile devices.
- Buttons become full-width on small screens for better touch interaction.

### Image Carousel
- Displays random images from Picsum Photos.
- Navigation buttons to go to previous/next image.
- Cycles through 5 images.

### API Integration
- Fetches jokes from the Official Joke API.
- Displays setup and punchline.
- Error handling for failed requests.

## Usage

1. Open `index.html` in a web browser.
2. Use the Previous/Next buttons to navigate the image carousel.
3. Click "Get a Random Joke" to fetch and display a joke.

## Files

- `index.html`: Main HTML structure.
- `styles.css`: CSS styles with responsive media queries.
- `script.js`: JavaScript for carousel functionality and API fetching.

## Technologies Used

- HTML5
- CSS3 (with media queries)
- JavaScript (ES6+ with async/await)

## Browser Support

Works in modern browsers that support ES6 features and fetch API.

## Troubleshooting

- If images don't load, check your internet connection (uses external URLs).
- If jokes don't fetch, ensure the API endpoint is accessible.
- For local development, you may need to run a local server to avoid CORS issues with the API.