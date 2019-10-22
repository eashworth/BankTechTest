'use strict'

describe('Account', function() {
  var account;
  var date;

  beforeEach(function() {
    account = new Account();
    date = new Date();
  });

  it('should have an initial balance of zero', function() {
    expect(account.getCurrentBalance()).toEqual(0);
  });

  describe('getDateOpened', function() {
    it('should return the date the account was opened', function() {
      expect(account.getDateOpened()).toEqual(date)
    });
  });

});
