// src/anagrama.js
function saoAnagramas(str1, str2) {
    const normalizar = str => str
        .normalize('NFD') // Normaliza para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos (acentos)
        .replace(/[^a-zA-Z]/g, '') // Remove caracteres não alfabéticos
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    return normalizar(str1) === normalizar(str2);
}

module.exports = saoAnagramas;
