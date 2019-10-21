function Account() {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE
}
Account.prototype.balance = function() {
  return this.balance;
};
