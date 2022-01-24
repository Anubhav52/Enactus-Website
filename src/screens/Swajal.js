import React from 'react';
import Status from '../components/Status';
import Swajal_hero from '../components/Swajal_hero';
import Swajal_main from '../components/Swajal_main';
import Swajal_waves from '../components/Swajal_waves';

export const Swajal = () => {
  return (
    <div>
      <Swajal_hero />
      <Swajal_waves />
      <Swajal_main />
      <Status />
    </div>
  );
};
