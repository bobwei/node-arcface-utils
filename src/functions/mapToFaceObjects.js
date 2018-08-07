import R from 'ramda';

const fn = () =>
  R.pipe(
    R.apply(R.zip),
    R.apply(R.xprod),
    R.map(
      R.pipe(
        R.map(R.head),
        R.apply(R.merge),
      ),
    ),
  );

export default fn;
