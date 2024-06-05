const math = require('./math');

test('33#22 should return 605', () => {
    expect(math(33, 22)).toBe(605);
});

test('50#24 should return 1924', () => {
    expect(math(50, 24)).toBe(1924);
});

test('265#17 should return 69936', () => {
    expect(math(265, 17)).toBe(69936);
});

test('765#4 should return 427707', () => {
    expect(math(765, 4)).toBe(427707);
});
