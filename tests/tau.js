var assert = require('assert');
var tau = require('../src/tau');

describe('Should be Tau', () => {
    it('Is PI * 2', (done) => {
      assert.equal(Math.PI * 2, tau);
      done();
    });
});

describe('Get circunference', () => {
    const calculateCircumference = radius => tau * radius;

    it('Circunference of 10', (done) => {
      assert.equal(calculateCircumference(10), 62.83185307179586);
      done();
    });
  
    it('Circunference of 1', (done) => {
        assert.equal(calculateCircumference(1), tau);
        done();
    });

    it('Circunference of 0', (done) => {
        assert.equal(calculateCircumference(0), 0);
    done();
    });
});

describe('Euler Formula', () => {
    const eulerFormula = i => Math.ceil(Math.cos(tau) + i * Math.sin(tau))
    it('10 should be close to 1', (done) => {
      assert.equal(eulerFormula(10), 1);
      done();      
    });
  
    it('1 should be close to 1', (done) => {
        assert.equal(eulerFormula(1), 1);
      done();
    });
  
    it('0 should be close to 1', (done) => {
        assert.equal(eulerFormula(0), 1);
      done();        
    });
});