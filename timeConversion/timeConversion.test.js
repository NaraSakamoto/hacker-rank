const timeConversion = require('./timeConversion');

test('Convert 12:01:00PM to 12:01:00', () => {
    expect(timeConversion("12:01:00PM")).toBe("12:01:00");
});

test('Convert 12:01:00AM to 00:01:00', () => {
    expect(timeConversion("12:01:00AM")).toBe("00:01:00");
});

test('Convert 07:45:00PM to 19:45:00', () => {
    expect(timeConversion("07:45:00PM")).toBe("19:45:00");
});