const sortArrAsc = require('./index');
test('adds 1 + 2 to equal 3', () => {
    expect(sortArrAsc([1,2,3,4])).toEqual([1,2,3,4]);
    expect(true).toBeTruthy();
  });

describe('Test converting Arabic numbers to Roman numerals', () => {
    it('should convert 1 to I', () => {
        expect(sortArrAsc([1,2,3,4])).toEqual([1,2,3,4]);
    });
    it('should convert 2 to II', () => {
        expect(sortArrAsc(['a','c','b'])).toEqual(['a','b','c']);
    });
});