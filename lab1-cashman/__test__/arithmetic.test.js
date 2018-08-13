const arith = require('../lib/arithmetic');

describe('arith', ()=>{
  describe('add', ()=>{
    it('adds two numbers', ()=>{
      expect(arith.add(1,1)).toBe(2);
      expect(arith.add(NaN, NaN)).toBe(null);
      expect(arith.add(1, NaN)).toBe(null);
      expect(arith.add('1', 1)).toBe(null);
      expect(arith.add(1, '1')).toBe(null);
    });
  });
  describe('sub', ()=>{
    it('subtracts one number from another', ()=>{
      expect(arith.sub(1,1)).toBe(0);
      expect(arith.sub(1,2)).toBe(1);
      expect(arith.sub(NaN, NaN)).toBe(null);
      expect(arith.sub(1, NaN)).toBe(null);
      expect(arith.sub('1', 1)).toBe(null);
      expect(arith.sub(1, '1')).toBe(null);
    });
  });
});