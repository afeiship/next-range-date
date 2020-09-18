# next-range-date
> Get a date range.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-range-date
```

## usage
```js
import '@feizheng/next-range-date';

const start = '2020-09-01';
const end = '2020-09-08';
const json = nx.rangeDate(start, end, true);;

/*
[
  '2020-09-01T00:00:00.000Z',
  '2020-09-02T00:00:00.000Z',
  '2020-09-03T00:00:00.000Z',
  '2020-09-04T00:00:00.000Z',
  '2020-09-05T00:00:00.000Z',
  '2020-09-06T00:00:00.000Z',
  '2020-09-07T00:00:00.000Z',
  '2020-09-08T00:00:00.000Z'
];
/*
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-range-date/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-range-date
[version-url]: https://npmjs.org/package/@feizheng/next-range-date

[license-image]: https://img.shields.io/npm/l/@feizheng/next-range-date
[license-url]: https://github.com/afeiship/next-range-date/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-range-date
[size-url]: https://github.com/afeiship/next-range-date/blob/master/dist/next-range-date.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-range-date
[download-url]: https://www.npmjs.com/package/@feizheng/next-range-date
