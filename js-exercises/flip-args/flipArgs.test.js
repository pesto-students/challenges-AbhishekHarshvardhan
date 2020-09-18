// write your own test cases

import flipArgs from './flipArgs';

describe('flipArgs', () => {
  it('returns a function that invokes `func` with arguments reversed', () => {
    const flipped = flipArgs((a, b) => a - b);
    expect(flipped(2, 3)).toBe(1);
  });
});
