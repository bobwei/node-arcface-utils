import ArcFace from 'arcface';

const fn = env => {
  const { ARCSOFT_APP_ID, ARCSOFT_FD_SDKKEY, ARCSOFT_FR_SDKKEY } = env;
  const arcface = new ArcFace();
  arcface.initialFDEngine(
    require.resolve('../libs/libarcsoft_fsdk_face_detection.so'),
    {
      appId: ARCSOFT_APP_ID,
      sdkKey: ARCSOFT_FD_SDKKEY,
      maxFace: 50,
    },
  );
  arcface.initialFREngine(
    require.resolve('../libs/libarcsoft_fsdk_face_recognition.so'),
    {
      appId: ARCSOFT_APP_ID,
      sdkKey: ARCSOFT_FR_SDKKEY,
    },
  );
  return arcface;
};

export default fn;
