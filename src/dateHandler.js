'use strict'

function DateHandler() {
};

DateHandler.prototype.getCurrentDate = function() {
  var currentDate = new Date;
  return currentDate;
};

DateHandler.prototype.formatDate = function(date) {
  return date.toLocaleDateString('en-GB');
};
