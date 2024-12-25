// Background image utility
function generateImageUrl() {
    const width = Math.floor(window.innerWidth * window.devicePixelRatio);
    const height = Math.floor(window.innerHeight * window.devicePixelRatio);
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/${width}/${height}?random=${randomId}`;
}

export function updateBackground() {
    const frame = document.getElementById('frame');
    frame.style.backgroundImage = `url(${generateImageUrl()})`;
}

export function startBackgroundUpdates(interval = 30000) {
    updateBackground();
    return setInterval(updateBackground, interval);
}