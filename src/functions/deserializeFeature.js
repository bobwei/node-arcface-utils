import TypeDef from 'arcface/lib/typedef';

const fn = ({ pbFeature, lFeatureSize }) =>
  new TypeDef.AFR_FSDK_FACEMODEL({
    pbFeature: Buffer.from(pbFeature, 'base64'),
    lFeatureSize,
  });

export default fn;
