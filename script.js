function updateTime() {
    const timeElement = document.getElementById('local-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

setInterval(updateTime, 1000);
updateTime();
