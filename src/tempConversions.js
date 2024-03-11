const tempConversions = {
    "Kelvin": {
        "Celsius": value => value - 273.15,
        "Fahrenheit": value => (value - 273.15) * 9/5 + 32,
        "Rankine": value => value * 9/5
    },
    "Celsius": {
        "Kelvin": value => value + 273.15,
        "Fahrenheit": value => value * 9/5 + 32,
        "Rankine": value => (value + 273.15) * 9/5
    },
    "Fahrenheit": {
        "Celsius": value => (value - 32) * 5/9,
        "Kelvin": value => (value - 32) * 5/9 + 273.15,
        "Rankine": value => value + 459.67
    },
    "Rankine": {
        "Celsius": value => (value - 491.67) * 5/9,
        "Fahrenheit": value => value - 459.67,
        "Kelvin": value => value * 5/9
    }
};