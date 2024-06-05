// src/anagrama.test.js
const saoAnagramas = require('./anagrama');

test('identifica "amor" e "roma" como anagramas', () => {
    expect(saoAnagramas('amor', 'roma')).toBe(true);
});

test('identifica "casa" e "saca" como anagramas', () => {
    expect(saoAnagramas('casa', 'saca')).toBe(true);
});

test('identifica "olá" e "mundo" como não anagramas', () => {
    expect(saoAnagramas('olá', 'mundo')).toBe(false);
});


test('identifica "olá" e "Olá" como anagramas ignorando caso', () => {
    expect(saoAnagramas('olá', 'Olá')).toBe(true);
});
