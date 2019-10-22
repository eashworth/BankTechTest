'use strict'

function Account() {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE
  this.dateOpened = new Date();
};

Account.prototype.getCurrentBalance = function() {
  return this.balance;
};

Account.prototype.getAccountOpeningDate = function() {
  return this.dateOpened;
};
