
let verifyChildrenOrder = require.requireActual('../VerifyChildrenOrder');
let invariant = require('invariant');

describe('VerifyChildrenOrder', function(){

  it('should error when controls is after scrubber', function(){
    const children = [
      {type: {name: 'Scrubber'}},
      {type: {name: 'Controls'}},
    ];
    expect(
      verifyChildrenOrder.bind(this, children)
    ).toThrow();
  });

  it('should not error when a comparison doesn\'t exist', function(){
    const children = [
      {type: {name: 'Scrubber'}},
    ];
    expect(
      verifyChildrenOrder.bind(this, children)
    ).not.toThrow();
  });

  it('should not throw when a comparison is valid', function(){
    const children = [
      {type: {name: 'Controls'}},
      {type: {name: 'Scrubber'}},
    ];
    expect(
      verifyChildrenOrder.bind(this, children)
    ).not.toThrow();
  });

});
