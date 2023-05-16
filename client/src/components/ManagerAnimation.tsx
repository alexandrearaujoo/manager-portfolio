'use client';

import Lottie from 'react-lottie';

import ManagerAnimated from '@/lotties/manager.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ManagerAnimated,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const ManagerAnimation = () => {
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

export default ManagerAnimation;
