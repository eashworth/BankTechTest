'use strict'

describe('DateHandler', function() {
  var dateHandler;
  var date;

  beforeEach(function() {
    dateHandler = new DateHandler();
    date = new Date();
  });

  describe('getCurrentDate', function() {
    it('returns the current date', function() {
      expect(dateHandler.getCurrentDate() instanceof Date).toEqual(true);
    });
  });

  describe('formatDate', function() {
    it('given a date, it returns it as a string in the format DD/MM/YYYY', function() {
      expect(dateHandler.formatDate(date)).toEqual(date.toLocaleDateString('en-GB'))
    });
  });

});
