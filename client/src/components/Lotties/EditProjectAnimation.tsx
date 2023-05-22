'use client';

import Lottie from 'react-lottie';

import EditProjectAnimated from '@/lotties/edit-project.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: EditProjectAnimated,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const EditProjectAnimation = () => {
  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
      isClickToPauseDisabled
      style={{ cursor: 'default' }}
    />
  );
};

export default EditProjectAnimation;
