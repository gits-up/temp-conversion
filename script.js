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
    const fromTypeSelect = document.getElementById("conversion-from-type");
    const toTypeSelect = document.getElementById("conversion-to-type");

    convertButton.addEventListener("click", function() {
        const selectedFromOption = fromTypeSelect.value;
        const selectedToOption = toTypeSelect.value;
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            resultText.textContent = `Please enter a valid temperature in ${selectedFromOption}.`;
        } else {
            const resultTempFunction = tempFunctionMap(selectedFromOption, selectedToOption);
            const resultTempValue = resultTempFunction(temperature);
            resultText.textContent = `${temperature}${tempUnitMap(selectedFromOption)} is equal to ${resultTempValue.toFixed(2)}${tempUnitMap(selectedToOption)}`;

        }
    });

    fromTypeSelect.addEventListener("change", function() {
        const selectedFromOption = fromTypeSelect.value;

        temperatureInput.setAttribute("placeholder", `Enter temperature in ${selectedFromOption}`);
    });
});

const dark = document.querySelector("#dark");
const light= document.querySelector('#light');
const to = document.querySelector("#to")

dark.addEventListener("click", () => {   
        dark.classList.toggle('no-display')
        light.classList.toggle('no-display');
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white';
})
light.addEventListener("click",() => {
    dark.classList.toggle("no-display")
    light.classList.toggle('no-display');
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black';
})
