// Wake lock utility
export async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            const wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock is active');
            return wakeLock;
        }
    } catch (err) {
        console.error(`Wake Lock error: ${err.name}, ${err.message}`);
    }
    return null;
}

export function setupWakeLockListeners(wakeLock) {
    if (wakeLock) {
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible') {
                await requestWakeLock();
            }
        });
    }
}