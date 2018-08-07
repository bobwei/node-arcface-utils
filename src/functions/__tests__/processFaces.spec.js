import R from 'ramda';

import logExecTime from 'modules/utils/functions/logExecTime';

import createArcFace from '../createArcFace';
import processFacesFn from '../processFaces';

const processFaces = logExecTime(processFacesFn);

test('processFaces', () => {
  const arcface = createArcFace(process.env);
  const data = require('./photos.json');
  return processFaces({ arcface }, data)
    .then(R.tap(console.log))
    .then(([r1, r2]) => {
      expect(r1.length).toEqual(1);
      expect(r2.length).toEqual(3);
    });
});
