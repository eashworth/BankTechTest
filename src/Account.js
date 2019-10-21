'use strict'

function Account() {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE
};
Account.prototype.getCurrentBalance = function() {
  return this.balance;
};
