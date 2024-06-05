// src/SomosiCEV.test.js
const SomosiCEV = require('./SomosiCEV');

test('retorna "Somos" para múltiplos de 3', () => {
    expect(SomosiCEV(3)).toBe('Somos');
    expect(SomosiCEV(6)).toBe('Somos');
    expect(SomosiCEV(9)).toBe('Somos');
});

test('retorna "iCEV" para múltiplos de 5', () => {
    expect(SomosiCEV(5)).toBe('iCEV');
    expect(SomosiCEV(10)).toBe('iCEV');
    expect(SomosiCEV(20)).toBe('iCEV');
});

test('retorna "SomosiCEV" para múltiplos de 3 e 5', () => {
    expect(SomosiCEV(15)).toBe('SomosiCEV');
    expect(SomosiCEV(30)).toBe('SomosiCEV');
    expect(SomosiCEV(45)).toBe('SomosiCEV');
});

test('retorna o número para não múltiplos de 3 ou 5', () => {
    expect(SomosiCEV(1)).toBe('1');
    expect(SomosiCEV(2)).toBe('2');
    expect(SomosiCEV(4)).toBe('4');
    expect(SomosiCEV(7)).toBe('7');
});
