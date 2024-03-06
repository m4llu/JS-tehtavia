function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);   
    if (!isNaN(temperature)) {
        convertedF = (temperature * 9/5) + 32;
        convertedC = (temperature - 32) * 5/9;
        document.getElementById('cToF').textContent = `${temperature}°F is ${convertedC.toFixed(8)}°C`;
        document.getElementById('fToC').textContent = `${temperature}°C is ${convertedF.toFixed(8)}°F`;
    } else {
        document.getElementById('temperatureOutput').textContent = "Syötä luku tekstikenttään";
    }
}