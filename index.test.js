const { sortArrAsc, multiplyArray } = require('./index');
// const multiplyArray = require ('./index');
test('adds 1 + 2 to equal 3', () => {
    expect(2+2).toEqual(4);
    expect(true).toBeTruthy();
  });

describe('Sorting Array', () => {
    it('keep array', () => {
        expect(sortArrAsc([1,2,3,4])).toEqual([1,2,3,4]);
    });
    it('order letters', () => {
        expect(sortArrAsc(['a','c','b'])).toEqual(['a','b','c']);
    });
    it('sort number array', () => {
        expect(sortArrAsc([1,5,7,4])).toEqual([1,4,5,7]);
    });
});

describe('operations on array', () => {
    it('multiply array', () => {
        expect(multiplyArray([1,2,3,4])).toEqual([2,4,9,16]);
    });   
});