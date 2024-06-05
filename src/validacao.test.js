// src/emailValidator.test.js
const validacao = require('./validacao');

test('valid email - example@example.com', () => {
    expect(validacao('example@example.com')).toBe(true);
});

test('valid email - user.name+tag+sorting@example.com', () => {
    expect(validacao('user.name+tag+sorting@example.com')).toBe(true);
});

test('invalid email - missing @', () => {
    expect(validacao('example.com')).toBe(false);
});

test('invalid email - multiple @', () => {
    expect(validacao('example@@example.com')).toBe(false);
});

test('invalid email - missing domain', () => {
    expect(validacao('example@.com')).toBe(false);
});

test('invalid email - missing username', () => {
    expect(validacao('@example.com')).toBe(false);
});

test('invalid email - missing top level domain', () => {
    expect(validacao('example@example')).toBe(false);
});

test('invalid email - space in address', () => {
    expect(validacao('example @example.com')).toBe(false);
});

test('invalid email - special characters', () => {
    expect(validacao('example@exam!ple.com')).toBe(false);
});
