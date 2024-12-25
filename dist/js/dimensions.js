// Dimensions utility
export function updateDimensions() {
    const width = window.innerHeight;
    const height = window.innerWidth;
    document.getElementById('dimensions').textContent = `${width}px × ${height}px`;
}