const temperatureConversions = require('./temperatureConversions');

describe('Temperature Conversions', () => {
  test('Convert 0 Kelvin to Celsius', () => {
    expect(temperatureConversions.kelvin.celsius(0)).toBe(-273.15);
  });


});