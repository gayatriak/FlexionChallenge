// Conversion rules for temperature
const temperatureConversions = {
    kelvin: {
      celsius: (input) => input - 273.15,
      fahrenheit: (input) => input * 9/5 - 459.67,
      rankine: (input) => input * 9/5
    },
    celsius: {
      kelvin: (input) => input + 273.15,
      fahrenheit: (input) => input * 9/5 + 32,
      rankine: (input) => (input + 273.15) * 9/5
    },
    fahrenheit: {
      kelvin: (input) => (input + 459.67) * 5/9,
      celsius: (input) => (input - 32) * 5/9,
      rankine: (input) => input + 459.67
    },
    rankine: {
      kelvin: (input) => input * 5/9,
      celsius: (input) => (input - 491.67) * 5/9,
      fahrenheit: (input) => input - 459.67
    }
  };
   // Conversion rules for volume
  const volumeConversions = {
    liters: {
      tablespoons: (input) => input * 67.628,
      "cubic-inches": (input) => input * 61.024,
      cups: (input) => input * 4.167,
      "cubic-feet": (input) => input / 28.317,
      gallons: (input) => input / 3.785
    },
    tablespoons: {
      liters: (input) => input / 67.628,
      "cubic-inches": (input) => input * 1.108,
      cups: (input) => input / 16,
      "cubic-feet": (input) => input / 1915,
      gallons: (input) => input / 256
    },
    "cubic-inches": {
      liters: (input) => input / 61.024,
      tablespoons: (input) => input / 1.108,
      cups: (input) => input / 14.4375,
      "cubic-feet": (input) => input / 1728,
      gallons: (input) => input / 231
    },
    cups: {
      liters: (input) => input / 4.167,
      tablespoons: (input) => input * 16,
      "cubic-inches": (input) => input * 14.4375,
      "cubic-feet": (input) => input / 119.688,
      gallons: (input) => input / 16
    },
    "cubic-feet": {
      liters: (input) => input * 28.317,
      tablespoons: (input) => input * 1915.01,
      "cubic-inches": (input) => input * 1728,
      cups: (input) => input * 119.688,
      gallons: (input) => input * 7.48052
    },
    gallons: {
      liters: (input) => input * 3.78541,
      tablespoons: (input) => input * 256,
      "cubic-inches": (input) => input * 231,
      cups: (input) => input * 16,
      "cubic-feet": (input) => input / 7.48052
    }
  };
   function convertUnits() {
    
  }
 