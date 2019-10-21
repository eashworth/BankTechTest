'use strict'

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('should have an initial balance of zero', function() {
    expect(account.getCurrentBalance()).toEqual(0);
  });

});
