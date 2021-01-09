/*!
 * name: @jswork/next-range-date
 * description: Get a date range.
 * homepage: https://github.com/afeiship/next-range-date
 * version: 1.0.2
 * date: 2021-01-09 16:45:14
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.rangeDate = function (inStart, inEnd, inIsToJson) {
    var start = new Date(inStart);
    var end = new Date(inEnd);
    for (var result = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      var value = inIsToJson ? dt.toJSON() : new Date(dt);
      result.push(value);
    }
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.rangeDate;
  }
})();
