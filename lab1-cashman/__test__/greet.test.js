const greeter = require('../lib/greet');

describe('greeter', ()=>{
  describe('sayHi()', ()=>{
    it('greets when a string is used', ()=>{
      expect(greeter.sayHi()).toBe(null);
      expect(greeter.sayHi('George')).toBe('Hello George');
      expect(greeter.sayHi(1)).toBe(null);
      expect(greeter.sayHi(true)).toBe(null);
      expect(greeter.sayHi(undefined)).toBe(null);
      expect(greeter.sayHi('')).toBe('Hello ');
      expect(greeter.sayHi(null)).toBe(null);
    });
  });
});