'use client';

import Lottie from 'react-lottie';

import CreateProjectAnimated from '@/lotties/create-project.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: CreateProjectAnimated,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const CreateProjectAnimation = () => {
  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
      isClickToPauseDisabled={false}
      style={{ cursor: 'default' }}
    />
  );
};

export default CreateProjectAnimation;
