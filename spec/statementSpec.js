'use strict'

describe('Statement', function() {
  var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  describe('printStatementHeader', function() {
    it("returns a string of column headers 'date', 'credit', 'debit' and 'balance' separated by || ", function() {
      expect(statement.printStatementHeader()).toEqual('date || credit || debit || balance')
    });
  });

});
