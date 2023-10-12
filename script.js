function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result-text");
    const conversionTypeSelect = document.getElementById("conversion-type");

    convertButton.addEventListener("click", function() {
        const selectedOption = conversionTypeSelect.value;
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            resultText.textContent = "Please enter a valid temperature in Celsius.";
            return;
        }

        if (selectedOption === "toFahrenheit") {
            const fahrenheit = celsiusToFahrenheit(temperature)
            resultText.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;     

        } else if (selectedOption === "toCelsius") {
            const celsius = fahrenheitToCelsius(temperature)
            resultText.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;     
        }  
    });

    conversionTypeSelect.addEventListener("change", function() {      
        const selectedOption = conversionTypeSelect.value;

        if (selectedOption === "toFahrenheit") {
            temperatureInput.setAttribute("placeholder", "Enter temperature in Celsius");

        } else if (selectedOption === "toCelsius") {
            temperatureInput.setAttribute("placeholder", "Enter temperature in Fahrenheit");
        }
    });
});


