(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var dateCreate = function (date) {
    var d = new Date(date);
    d.setHours(8);
    return d;
  };

  nx.rangeDate = function (inStart, inEnd, inIsToJson) {
    var start = dateCreate(inStart);
    var end = dateCreate(inEnd);

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
