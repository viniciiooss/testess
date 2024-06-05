// src/temperatura.test.js
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./temperatura');

test('converte 0°C para 32°F', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('converte 100°C para 212°F', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
});

test('converte -40°C para -40°F', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
});

test('converte 32°F para 0°C', () => {
    expect(fahrenheitParaCelsius(32)).toBeCloseTo(0);
});

test('converte 212°F para 100°C', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
});

test('converte -40°F para -40°C', () => {
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
});
