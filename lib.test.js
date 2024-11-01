const lib = require('./lib');

test('7 should be true', () => {
    expect(lib.prime(7)).toBe(true); 
});

test('7 should be false', () => {
    expect(lib.prime(6)).toBe(false); 
});


test('factorial 3 should be 6', () => {
    expect(lib.factorial(3)).toBe(6); 
});

test('factorial 0 should be 1', () => {
    expect(lib.factorial(0)).toBe(1);
});
