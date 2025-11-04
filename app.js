function getSensorData() {
    return {
        moisture: Math.floor(Math.random() * (90 - 20 + 1)) + 20, 
        temp: (Math.random() * (35 - 15) + 15).toFixed(1), 
        humidity: Math.floor(Math.random() * (85 - 40 + 1)) + 40 
    };
}
function updateSensorData() {
    const data = getSensorData();

    document.getElementById('moisture-value').textContent = data.moisture;
    document.getElementById('temp-value').textContent = data.temp;
    document.getElementById('humidity-value').textContent = data.humidity;
    document.getElementById('last-updated').textContent = new Date().toLocaleTimeString();

    
    const statusText = document.getElementById('system-status-text');
    if (data.moisture < 40) {
        statusText.textContent = "Irrigation Needed";
        statusText.classList.remove('status-online');
        statusText.classList.add('status-offline');
    } else {
        statusText.textContent = "Online & Optimal";
        statusText.classList.remove('status-offline');
        statusText.classList.add('status-online');
    }
}
function setupEventListeners() {
    const modeToggle = document.getElementById('mode-toggle-switch');
    const modeLabel = document.getElementById('mode-label');

    modeToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            modeLabel.textContent = "Manual";
            console.log("System switched to Manual mode.");
        } else {
            modeLabel.textContent = "Automatic"
            console.log("System switched to Automatic mode.");
        }
    });
    document.getElementById('valve1-on').addEventListener('click', () => {
        console.log("Valve 1 ON signal sent.");
    });

    document.getElementById('valve1-off').addEventListener('click', () => {
        console.log("Valve 1 OFF signal sent.");
    });
}
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateSensorData, 5000);
    updateSensorData();
    setupEventListeners();
});