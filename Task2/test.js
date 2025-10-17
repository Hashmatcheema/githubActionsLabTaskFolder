
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./converter');

class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    test(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    run() {
        console.log('Running Temperature Converter Tests...\n');
        
        this.tests.forEach(({ name, testFunction }) => {
            try {
                testFunction();
                console.log(`✓ ${name} - Test Passed`);
                this.passed++;
            } catch (error) {
                console.log(`✗ ${name} - Test Failed: ${error.message}`);
                this.failed++;
            }
        });

        console.log(`\nTest Results: ${this.passed} passed, ${this.failed} failed`);
        
        if (this.failed === 0) {
            console.log('🎉 All tests passed!');
            process.exit(0);
        } else {
            console.log('❌ Some tests failed!');
            process.exit(1);
        }
    }
}

// Create test runner instance
const testRunner = new TestRunner();

// Test cases
testRunner.test('Convert 0°C to Fahrenheit', () => {
    const result = celsiusToFahrenheit(0);
    const expected = 32;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°F, but got ${result}°F`);
    }
});

testRunner.test('Convert 100°C to Fahrenheit', () => {
    const result = celsiusToFahrenheit(100);
    const expected = 212;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°F, but got ${result}°F`);
    }
});

testRunner.test('Convert 212°F to Celsius', () => {
    const result = fahrenheitToCelsius(212);
    const expected = 100;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°C, but got ${result}°C`);
    }
});

testRunner.test('Convert 32°F to Celsius', () => {
    const result = fahrenheitToCelsius(32);
    const expected = 0;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°C, but got ${result}°C`);
    }
});

testRunner.test('Convert -40°C to Fahrenheit (edge case)', () => {
    const result = celsiusToFahrenheit(-40);
    const expected = -40;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°F, but got ${result}°F`);
    }
});

testRunner.test('Convert -40°F to Celsius (edge case)', () => {
    const result = fahrenheitToCelsius(-40);
    const expected = -40;
    if (result !== expected) {
        throw new Error(`Expected ${expected}°C, but got ${result}°C`);
    }
});

testRunner.test('Error handling for non-numeric input', () => {
    try {
        celsiusToFahrenheit('invalid');
        throw new Error('Should have thrown an error for non-numeric input');
    } catch (error) {
        if (error.message !== 'Input must be a number') {
            throw new Error('Wrong error message');
        }
    }
});

testRunner.run();
