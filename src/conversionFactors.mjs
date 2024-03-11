// Define conversion factors in a hashmap
const conversionFactors = {
    'Fahrenheit': {
        'Rankine': value => value + 459.67,
        'Celsius': value => (value - 32) * (5 / 9)
    },
    'Celsius': {
        'Fahrenheit': value => (value * 9 / 5) + 32,
        'Rankine': value => (value + 273.15) * (9 / 5)
    },
    'Kelvin': {
        'Fahrenheit': value => (value - 273.15) * (9 / 5) + 32,
        'Celsius': value => value - 273.15
    },
    'cups': {
        'liters': value => value * 0.236588
    },
    'gallons': {
        'Kelvin': value => value / 0.00378541
    }
};
console.log("testing git connectivity");


//// Function to convert units
function convertValue(value, fromUnit, toUnit) {
    if (!conversionFactors[fromUnit] || !conversionFactors[fromUnit][toUnit]) {
        return NaN; // Invalid conversion
    }
    return conversionFactors[fromUnit][toUnit](value);
}

// Function to validate student responses
function validateResponse(value, fromUnit, toUnit, response) {
    const convertedValue = convertValue(value, fromUnit, toUnit);
    if (isNaN(convertedValue) || isNaN(parseFloat(response))) {
        return 'invalid';
    }
    return Math.abs(convertedValue - parseFloat(response)) < 0.01 ? 'correct' : 'incorrect';
}



export const handler = async (event) => {
   let response = [];
   
    for (let i = 0; i < event.length ; i++) {
       console.log("AKA", event[i].value);
      
       response.push(validateResponse(event[i].value, event[i].fromUnit, event[i].toUnit, event[i].response));

    }
    const returnObj = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "body": JSON.stringify(response)
    };
    
  return returnObj;
};
