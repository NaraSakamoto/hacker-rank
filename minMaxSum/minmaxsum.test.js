const minMaxSum = require('./minmaxsum');

test('10 e 14', () => {
    expect(minMaxSum([1, 2, 3, 4, 5])).toBe("10 14");
});

test('5 e 5', () => {
    expect(minMaxSum([1, 1, 1, 1, 1])).toBe("4 4");
});

test('10 e 14', () => {
    expect(minMaxSum([5, 4, 3, 2, 1])).toBe("10 14");
});