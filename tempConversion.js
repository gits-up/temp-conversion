function identityFunction(value) {
    return value;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function celsiusToRankine(celsius) {
    return (celsius * 9/5) + 491.67;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function fahrenheitToRankine(fahrenheit) {
    return fahrenheit + 459.67;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function kelvinToRankine(kelvin) {
    return kelvin * 9/5;
}

function rankineToCelsius(rankine) {
    return (rankine - 491.67) * 5/9;
}

function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
}

function rankineToKelvin(rankine) {
    return rankine * 5/9;
}

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

function tempUnitMap(tempType) {
    const tempUnitMap = new Map([
        ["Celsius", "°C"],
        ["Fahrenheit", "°F"],
        ["Kelvin", "K"],
        ["Rankine", "°R"],
    ]);

    return tempUnitMap.get(tempType)
}
