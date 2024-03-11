const temperatureConversions = require('./conversion');

describe('Temperature Conversions', () => {
  test('Convert 0 Kelvin to Celsius', () => {
    expect(temperatureConversions.kelvin.celsius(0)).toBe(-273.15);
  });
  test('Convert 1 liter to tablespoons', () => {
    expect(volumeConversions.liters.tablespoons(1)).toBeCloseTo(67.628, 5);
  });

});
