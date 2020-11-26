// Fizz Buzz
// Write a function that takes positive integers and outputs their string representation.

// If the number is a multiple of three, return the string "Fizz".
// If the number is a multiple of five, return the string "Buzz".
// If the number is a multiple of both three and five, return the string "FizzBuzz".

import { FizzBuzz } from './fizzBuzz';

describe('FizzBuzz', () => {
    it('should return number 1 as the string 1', () => {
        // arrange
        const fizzBuzz = new FizzBuzz();
        // act
        const result = fizzBuzz.doFizzBuzz(1);
        // assert
        expect(result).toEqual('1');
    });
    it('should return number 2 as the string 2', () => {
        // arrange
        const fizzBuzz = new FizzBuzz();
        // act
        const result = fizzBuzz.doFizzBuzz(2);
        // assert
        expect(result).toEqual('2');
    });
    it('should return number 3 as the string Fizz', () => {
        // arrange
        const fizzBuzz = new FizzBuzz();
        // act
        const result = fizzBuzz.doFizzBuzz(3);
        // assert
        expect(result).toEqual('Fizz');
    });
});
