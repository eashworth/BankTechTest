'use strict'

describe('DateHandler', function() {
  var dateHandler;
  var date;

  beforeEach(function() {
    dateHandler = new DateHandler();
    date = new Date();
  });

  describe('returnDateAsString', function() {
    it("given a date object, it returns it as a string", function() {
      expect(typeof dateHandler.returnDateAsString(date) === "string").toEqual(true);
    });
  });

});
