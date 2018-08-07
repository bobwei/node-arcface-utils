import R from 'ramda';

/*
  Given photos, return faces with extracted features
*/
const fn = (dependencies, data) => {
  const { arcface } = dependencies;
  return Promise.resolve(data)
    .then(
      R.map(arg => {
        return Promise.resolve(arg)
          .then(R.path(['source', 'url']))
          .then(img => arcface.parseImage(img))
          .then(asvl => {
            return Promise.resolve(arcface.detect(asvl))
              .then(
                R.converge(R.zip, [
                  R.path(['rcFace']),
                  R.path(['lfaceOrient']),
                ]),
              )
              .then(
                R.map(([rcFace, lfaceOrient]) => ({
                  feature: arcface.extractFeature(asvl, rcFace, lfaceOrient),
                })),
              );
          });
      }),
    )
    .then(promises => Promise.all(promises));
};

export default R.curry(fn);
