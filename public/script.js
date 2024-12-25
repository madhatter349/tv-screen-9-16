import { requestWakeLock, setupWakeLockListeners } from './js/wakeLock.js';
import { startBackgroundUpdates } from './js/background.js';

// Initialize wake lock on user interaction
document.addEventListener('click', async function enableWakeLock() {
    document.removeEventListener('click', enableWakeLock);
    const wakeLock = await requestWakeLock();
    setupWakeLockListeners(wakeLock);
});

// Start background updates
startBackgroundUpdates();