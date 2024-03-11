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
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const inputUnit = document.getElementById('inputUnit').value.trim().toLowerCase();
    const targetUnit = document.getElementById('targetUnit').value.trim().toLowerCase();
    const studentNumber = document.getElementById('studentNumber').value;
    const output = document.getElementById('result').innerText;
    // inputs have to exist
    if (!studentNumber || !inputNumber || !targetUnit || !studentNumber)  {
      output= 'Invalid';
        return;
      }
    // input number & student number must be an int
    if (isNaN(inputNumber) || isNaN(studentNumber)) {
      output= 'Invalid';
      return;
    }

     // got to be a temp to temp or vol to vol
    if (!(inputUnit in temperatureConversions) && !(inputUnit in volumeConversions)) {
      output= 'Invalid';
      return;
    }
     // got to be a temp to temp or vol to vol
    if (!(targetUnit in temperatureConversions) && !(targetUnit in volumeConversions)) {
      output= 'Invalid target unit';
      return;
    }
    
    let result;

    if (inputUnit in temperatureConversions && targetUnit in temperatureConversions[inputUnit]) {
      result = temperatureConversions[inputUnit][targetUnit](inputNumber);
      //kelvin cannot be negative but the rest can 
      if (inputUnit === 'kelvin' && result < 0) {
        output= 'Incorrect';
        return;
      }
    }

    else if (inputUnit in volumeConversions && targetUnit in volumeConversions[inputUnit]) {
      result = volumeConversions[inputUnit][targetUnit](inputNumber);
     
      if (result < 0) {
        output= 'Incorrect';
        return;
      }
    } else {
      output= 'Incorrect';
      return;
    }
    output= 'Correct';
  }
 