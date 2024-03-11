const temperatureConversions = require('./conversion');

describe('Temperature Conversions', () => {
  test('Convert 0 Kelvin to Celsius', () => {
    expect(temperatureConversions.kelvin.celsius(0)).toBe(-273.15);
  });


});