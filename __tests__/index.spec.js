(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.rangeDate should return range of date instance', function () {
      const start = '2020-09-01';
      const end = '2020-09-08';
      const json = nx.rangeDate(start, end, true);

      expect(json).toEqual([
        '2020-09-01T00:00:00.000Z',
        '2020-09-02T00:00:00.000Z',
        '2020-09-03T00:00:00.000Z',
        '2020-09-04T00:00:00.000Z',
        '2020-09-05T00:00:00.000Z',
        '2020-09-06T00:00:00.000Z',
        '2020-09-07T00:00:00.000Z',
        '2020-09-08T00:00:00.000Z'
      ]);
    });
  });
})();
