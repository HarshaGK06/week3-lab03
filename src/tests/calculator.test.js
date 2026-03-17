const { add, subtract, multiply, divide, modulo, power, squareRoot, performCalculation } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should subtract a number from itself', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(7, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractions', () => {
      expect(multiply(0.5, 0.5)).toBeCloseTo(0.25);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should return zero when zero is divided', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should handle division resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333333333);
    });

    test('should return error message for division by zero', () => {
      expect(divide(10, 0)).toBe('Error: Division by zero');
    });

    test('should return error message for zero divided by zero', () => {
      expect(divide(0, 0)).toBe('Error: Division by zero');
    });

    test('should handle division with negative zero', () => {
      expect(divide(5, -0)).toBe('Error: Division by zero');
    });
  });

  describe('Modulo', () => {
    test('should return remainder of division', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should handle modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should return zero for even division', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should return error message for modulo by zero', () => {
      expect(modulo(10, 0)).toBe('Error: Modulo by zero');
    });

    test('should handle modulo with decimals', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  describe('Power/Exponentiation', () => {
    test('should raise base to positive exponent', () => {
      expect(power(2, 5)).toBe(32);
    });

    test('should handle zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });

    test('should handle fractional exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle base of zero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle large exponents', () => {
      expect(power(10, 3)).toBe(1000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should return error for negative numbers', () => {
      expect(squareRoot(-4)).toBe('Error: Cannot calculate square root of negative number');
    });

    test('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should return approx square root of non-perfect squares', () => {
      expect(squareRoot(10)).toBeCloseTo(3.162277660168);
    });
  });

  describe('performCalculation', () => {
    describe('Addition with string inputs', () => {
      test('should perform addition with string numbers', () => {
        expect(performCalculation('2', '+', '3')).toBe(5);
      });

      test('should perform addition with decimal strings', () => {
        expect(performCalculation('10.5', '+', '2.5')).toBe(13);
      });
    });

    describe('Subtraction with string inputs', () => {
      test('should perform subtraction with string numbers', () => {
        expect(performCalculation('10', '-', '4')).toBe(6);
      });
    });

    describe('Multiplication with string inputs', () => {
      test('should perform multiplication with string numbers', () => {
        expect(performCalculation('45', '*', '2')).toBe(90);
      });
    });

    describe('Division with string inputs', () => {
      test('should perform division with string numbers', () => {
        expect(performCalculation('20', '/', '5')).toBe(4);
      });

      test('should return error for division by zero string', () => {
        expect(performCalculation('10', '/', '0')).toBe('Error: Division by zero');
      });
    });

    describe('Modulo with string inputs', () => {
      test('should perform modulo with string numbers', () => {
        expect(performCalculation('10', '%', '3')).toBe(1);
      });

      test('should return error for modulo by zero string', () => {
        expect(performCalculation('10', '%', '0')).toBe('Error: Modulo by zero');
      });
    });

    describe('Power with string inputs', () => {
      test('should perform power operation with string numbers', () => {
        expect(performCalculation('2', 'pow', '5')).toBe(32);
      });
    });

    describe('Exponentiation operator', () => {
      test('should perform exponentiation with exponent operator', () => {
        const result = performCalculation('2', 'pow', '5');
        expect(result).toBe(32);
      });
    });

    describe('Square Root with string inputs', () => {
      test('should perform square root with string number', () => {
        expect(performCalculation('16', 'sqrt', '0')).toBe(4);
      });

      test('should return error for negative square root', () => {
        expect(performCalculation('-4', 'sqrt', '0')).toBe('Error: Cannot calculate square root of negative number');
      });
    });

    describe('Invalid operator', () => {
      test('should return error message for caret operator', () => {
        expect(performCalculation('5', '^', '2')).toBe('Error: Unsupported operation. Use +, -, *, /, %, pow, or sqrt');
      });

      test('should return error message for unknown operator', () => {
        expect(performCalculation('5', '&', '2')).toBe('Error: Unsupported operation. Use +, -, *, /, %, pow, or sqrt');
      });
    });

    describe('Invalid input', () => {
      test('should return error message for non-numeric first input', () => {
        expect(performCalculation('abc', '+', '5')).toBe('Error: Invalid input. Please enter valid numbers.');
      });

      test('should return error message for non-numeric second input', () => {
        expect(performCalculation('5', '+', 'xyz')).toBe('Error: Invalid input. Please enter valid numbers.');
      });

      test('should return error message for both non-numeric inputs', () => {
        expect(performCalculation('abc', '+', 'xyz')).toBe('Error: Invalid input. Please enter valid numbers.');
      });

      test('should return error for empty string input', () => {
        expect(performCalculation('', '+', '5')).toBe('Error: Invalid input. Please enter valid numbers.');
      });
    });

    describe('Edge cases from image examples', () => {
      test('Example 1: 2 + 3 = 5', () => {
        expect(performCalculation('2', '+', '3')).toBe(5);
      });

      test('Example 2: 10 - 4 = 6', () => {
        expect(performCalculation('10', '-', '4')).toBe(6);
      });

      test('Example 3: 45 * 2 = 90', () => {
        expect(performCalculation('45', '*', '2')).toBe(90);
      });

      test('Example 4: 20 / 5 = 4', () => {
        expect(performCalculation('20', '/', '5')).toBe(4);
      });
    });

    describe('Extended operations from image examples', () => {
      test('Example 1: 5 % 2 = 1 (modulo)', () => {
        expect(performCalculation('5', '%', '2')).toBe(1);
      });

      test('Example 2: 2 ^ 3 = 8 (power)', () => {
        expect(performCalculation('2', 'pow', '3')).toBe(8);
      });

      test('Example 2 alt: 2 ** 3 = 8 (exponentiation operator)', () => {
        expect(performCalculation('2', '**', '3')).toBe(8);
      });

      test('Example 3: sqrt(16) = 4 (square root)', () => {
        expect(performCalculation('16', 'sqrt', '0')).toBe(4);
      });
    });

    describe('Real-world edge cases', () => {
      test('should handle very small decimal numbers', () => {
        expect(divide(0.0001, 0.001)).toBeCloseTo(0.1);
      });

      test('should handle negative division by negative', () => {
        expect(divide(-100, -5)).toBe(20);
      });

      test('should handle mixed operations precision', () => {
        // (10 + 5) * 2 = 30, then / 3 = 10
        expect(multiply(add(10, 5), 2)).toBe(30);
        expect(divide(30, 3)).toBe(10);
      });

      test('should handle complex power operations', () => {
        expect(power(2, 10)).toBe(1024);
      });

      test('should handle square root of results', () => {
        expect(squareRoot(power(5, 2))).toBe(5);
      });

      test('should handle modulo operations with larger numbers', () => {
        expect(modulo(100, 7)).toBe(2);
      });

      test('should handle chained modulo operations', () => {
        expect(modulo(modulo(25, 7), 3)).toBe(1);
      });

      test('should handle power with negative base', () => {
        expect(power(-2, 3)).toBe(-8);
      });

      test('should handle power with even negative exponent', () => {
        expect(power(-2, 4)).toBe(16);
      });

      test('should handle square root precision', () => {
        expect(squareRoot(2)).toBeCloseTo(1.414213562373095);
      });

      test('should return error for negative square root', () => {
        expect(squareRoot(-25)).toBe('Error: Cannot calculate square root of negative number');
      });

      test('should handle modulo with negative dividend', () => {
        expect(modulo(-17, 5)).toBe(-2);
      });

      test('should handle modulo with negative divisor', () => {
        expect(modulo(17, -5)).toBe(2);
      });

      test('should return error for modulo by zero', () => {
        expect(modulo(10, 0)).toBe('Error: Modulo by zero');
      });

      test('should handle decimal modulo', () => {
        expect(modulo(7.5, 2.5)).toBeCloseTo(0);
      });

      test('should handle power with fractional exponent', () => {
        expect(power(16, 0.25)).toBe(2);
      });

      test('should handle power with zero base', () => {
        expect(power(0, 10)).toBe(0);
      });

      test('should handle power with base of 1', () => {
        expect(power(1, 999)).toBe(1);
      });

      test('should handle square root of perfect squares', () => {
        expect(squareRoot(144)).toBe(12);
        expect(squareRoot(361)).toBe(19);
      });

      test('should handle square root of one', () => {
        expect(squareRoot(1)).toBe(1);
      });

      test('should validate all new operations with performCalculation', () => {
        expect(performCalculation('10', '%', '3')).toBe(1);
        expect(performCalculation('3', 'pow', '3')).toBe(27);
        expect(performCalculation('25', 'sqrt', '0')).toBe(5);
      });

      test('should handle string-based calculations for extended operations', () => {
        expect(performCalculation('100', '%', '15')).toBe(10);
        expect(performCalculation('5', 'pow', '2')).toBe(25);
        expect(performCalculation('9', 'sqrt', '0')).toBe(3);
      });
    });
  });
});
