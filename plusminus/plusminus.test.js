const plusMinus = require('./plusminus');

test('1 2 3 -1 -2 -3 0 0', () => {
    expect(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]).toString()).toBe("0.375,0.375,0.25");
});

test('-4 3 -9 0 4 1', () => {
    expect(plusMinus([-4, 3,-9, 4]).toString()).toBe("0.5,0.5,0");
});

test('0 0 0 0 0 0', () => {
    expect(plusMinus([0, 0, 0, 0, 0, 0]).toString()).toBe("0,0,1");
});

test('-1 -1 -1 -1 -1 -1', () => {
    expect(plusMinus([-1, -1, -1, -1, -1, -1]).toString()).toBe("0,1,0");
});

test('1 1 1 1 1 1', () => {
    expect(plusMinus([1, 1, 1, 1, 1, 1]).toString()).toBe("1,0,0");
});
