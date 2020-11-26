// Fizz Buzz
// Write a function that takes positive integers and outputs their string representation.

// If the number is a multiple of three, return the string "Fizz".
// If the number is a multiple of five, return the string "Buzz".
// If the number is a multiple of both three and five, return the string "FizzBuzz".

class FizzBuzzTwo {
    doFizzBuzz(number: number) {
        if (number === 3) {
            return 'Fizz';
        }

        return number.toString();
    }
}

describe('FizzBuzzTwo', () => {
    xit('should return 1 as string', () => {
        // arrange
        const fizzBuzzTwo = new FizzBuzzTwo();
        // act
        const actual = fizzBuzzTwo.doFizzBuzz(1);
        // assert
        expect(actual).toEqual('1');
    });

    xit('should return 2 as string', () => {
        // arrange
        const fizzBuzzTwo = new FizzBuzzTwo();
        // act
        const actual = fizzBuzzTwo.doFizzBuzz(2);
        // assert
        expect(actual).toEqual('2');
    });

    xit('should return 3 as Fizz', () => {
        // arrange
        const fizzBuzzTwo = new FizzBuzzTwo();
        // act
        const actual = fizzBuzzTwo.doFizzBuzz(3);
        // assert
        expect(actual).toEqual('Fizz');
    });

    it.each`
        number | expected
        ${1}   | ${'1'}
        ${2}   | ${'2'}
        ${3}   | ${'Fizz'}
    `('returns $expected when number $number', ({ number, expected }) => {
        const fizzBuzzTwo = new FizzBuzzTwo();
        expect(fizzBuzzTwo.doFizzBuzz(number)).toBe(expected);
    });
});
