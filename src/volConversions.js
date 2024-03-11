const volConversions = {
    "liters": {
        "tablespoons": value => value * 67.628,
        "cubic-inches": value => value * 61.024,
        "cups": value => value * 4.22675,
        "cubic-feet": value => value * 0.035315,
        "gallons": value => value * 0.264172
    },
    "tablespoons": {
        "liters": value => value * 0.014787,
        "cubic-inches": value => value * 0.902344,
        "cups": value => value * 0.0625,
        "cubic-feet": value => value * 0.000522,
        "gallons": value => value * 0.00390625
    },
    "cubic-inches": {
        "liters": value => value * 0.0163871,
        "tablespoons": value => value * 1.10823,
        "cups": value => value * 0.0692641,
        "cubic-feet": value => value * 0.000578704,
        "gallons": value => value * 0.004329
    },
    "cups": {
        "liters": value => value * 0.236588,
        "tablespoons": value => value * 16,
        "cubic-inches": value => value * 14.4375,
        "cubic-feet": value => value * 0.00835503,
        "gallons": value => value * 0.0625
    },
    "cubic-feet": {
        "liters": value => value * 28.3168,
        "tablespoons": value => value * 1915.01,
        "cubic-inches": value => value * 1728,
        "cups": value => value * 119.688,
        "gallons": value => value * 7.48052
    },
    "gallons": {
        "liters": value => value * 3.78541,
        "tablespoons": value => value * 256,
        "cubic-inches": value => value * 231,
        "cups": value => value * 16,
        "cubic-feet": value => value * 0.133681
    }
};