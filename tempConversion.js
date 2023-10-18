/**
 * Returns the input value as is.
 * @param {number} value - The input value.
 * @returns {number} The input value.
 */
function identityFunction(value) {
    return value;
}

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Converts Celsius to Kelvin.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Kelvin.
 */
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

/**
 * Converts Celsius to Rankine.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Rankine.
 */
function celsiusToRankine(celsius) {
    return (celsius * 9/5) + 491.67;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

/**
 * Converts Fahrenheit to Kelvin.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature in Kelvin.
 */
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

/**
 * Converts Fahrenheit to Rankine.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature in Rankine.
 */
function fahrenheitToRankine(fahrenheit) {
    return fahrenheit + 459.67;
}

/**
 * Converts Kelvin to Celsius.
 * @param {number} kelvin - The temperature in Kelvin.
 * @returns {number} The temperature in Celsius.
 */
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

/**
 * Converts Kelvin to Fahrenheit.
 * @param {number} kelvin - The temperature in Kelvin.
 * @returns {number} The temperature in Fahrenheit.
 */
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

/**
 * Converts Kelvin to Rankine.
 * @param {number} kelvin - The temperature in Kelvin.
 * @returns {number} The temperature in Rankine.
 */
function kelvinToRankine(kelvin) {
    return kelvin * 9/5;
}

/**
 * Converts Rankine to Celsius.
 * @param {number} rankine - The temperature in Rankine.
 * @returns {number} The temperature in Celsius.
 */
function rankineToCelsius(rankine) {
    return (rankine - 491.67) * 5/9;
}

/**
 * Converts Rankine to Fahrenheit.
 * @param {number} rankine - The temperature in Rankine.
 * @returns {number} The temperature in Fahrenheit.
 */
function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
}

/**
 * Converts Rankine to Kelvin.
 * @param {number} rankine - The temperature in Rankine.
 * @returns {number} The temperature in Kelvin.
 */
function rankineToKelvin(rankine) {
    return rankine * 5/9;
}

/**
 * Returns the temperature conversion function for the given input and output temperature types.
 * @param {string} fromTemp - The input temperature type.
 * @param {string} toTemp - The output temperature type.
 * @returns {function} The temperature conversion function.
 */
function tempFunctionMap(fromTemp, toTemp) {
    const tempFuncMap = new Map([
        ["CelsiusCelsius", identityFunction],
        ["CelsiusFahrenheit", celsiusToFahrenheit],
        ["CelsiusKelvin", celsiusToKelvin],
        ["CelsiusRankine", celsiusToRankine],

        ["FahrenheitCelsius", fahrenheitToCelsius],
        ["FahrenheitFahrenheit", identityFunction],
        ["FahrenheitKelvin", fahrenheitToKelvin],
        ["FahrenheitRankine", fahrenheitToRankine],

        ["KelvinCelsius", kelvinToCelsius],
        ["KelvinFahrenheit", kelvinToFahrenheit],
        ["KelvinKelvin", identityFunction],
        ["KelvinRankine", kelvinToRankine],

        ["RankineCelsius", rankineToCelsius],
        ["RankineFahrenheit", rankineToFahrenheit],
        ["RankineKelvin", rankineToKelvin],
        ["RankineRankine", identityFunction],
    ]);

    const key = fromTemp + toTemp;
    return tempFuncMap.get(key);
}

/**
 * Returns the temperature unit symbol for the given temperature type.
 * @param {string} tempType - The temperature type.
 * @returns {string} The temperature unit symbol.
 */
function tempUnitMap(tempType) {
    const tempUnitMap = new Map([
        ["Celsius", "°C"],
        ["Fahrenheit", "°F"],
        ["Kelvin", "K"],
        ["Rankine", "°R"],
    ]);

    return tempUnitMap.get(tempType)
}