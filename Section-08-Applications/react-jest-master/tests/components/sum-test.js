/* global jest, describe, it, expect */
jest.dontMock('../../src/components/sum');

const sum = require('../../src/components/sum');

describe('sum', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(3, 4)).toBe(7);
  });
});
